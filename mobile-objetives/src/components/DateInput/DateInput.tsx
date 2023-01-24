import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { StyledInputText } from 'components/StyledInputText'
import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme'

const styles = StyleSheet.create({
  label: { marginBottom: theme.spaces.xxs }
})

type Props = {
  label?: string
}
export const DateInput: React.FC<Props> = ({ label }) => {
  const [showDatePicker, setShowDatePicker] = useState(false)
  const [date, setDate] = useState(new Date())

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate
    setShowDatePicker(false)
    setDate(currentDate)
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
