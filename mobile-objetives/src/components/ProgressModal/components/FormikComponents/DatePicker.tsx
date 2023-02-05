import { DateInput, DateInputProps } from 'components/DateInput'
import { useField } from 'formik'
import React from 'react'

type FormikInputProps = DateInputProps & {
  name: string
}

export const DatePicker: React.FC<FormikInputProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <DateInput
      value={field.value}
      error={!!meta.error}
      onChangeText={(value) => {
        console.log({ value })

        helpers.setValue(value)
      }}
      {...props}
    />
  )
}
