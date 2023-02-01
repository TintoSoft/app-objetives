import React, { useState } from 'react'
import { View, StyleSheet, TextInputProps } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { StyledInputText } from 'components/StyledInputText'
import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme'

const styles = StyleSheet.create({
  label: { marginBottom: theme.spaces.xxs }
})

export type DateInputProps = TextInputProps & {
  label?: string
  error?: boolean
  value?: Date
}
export const DateInput: React.FC<DateInputProps> = ({ label, value, onChangeText }) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(value ?? new Date())

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShowDatePicker(false)
    setDate(currentDate)
    onChangeText && onChangeText(currentDate)
  }

  return (
    <View>
      {label && (
        <StyledText style={styles.label} bold>
          {label}
        </StyledText>
      )}
      <StyledInputText
        caretHidden
        showSoftInputOnFocus={false}
        value={date.toLocaleDateString()}
        onPressIn={() => setShowDatePicker(true)}
      />
      {showDatePicker && <DateTimePicker value={date} onChange={onChange} />}
    </View>
  )
}
