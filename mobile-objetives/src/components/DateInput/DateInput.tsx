import React, { useState } from 'react'
import { TextInputProps } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { StyledInputText } from 'components/StyledInputText'

export type DateInputProps = TextInputProps & {
  label?: string
  error?: boolean
  value?: Date
}
export const DateInput: React.FC<DateInputProps> = ({ label, value, onChangeText, style }) => {
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
    <>
      <StyledInputText
        caretHidden
        showSoftInputOnFocus={false}
        value={date.toLocaleDateString()}
        onPressIn={() => setShowDatePicker(true)}
        style={style}
        label={label}
      />
      {showDatePicker && <DateTimePicker value={date} onChange={onChange} />}
    </>
  )
}
