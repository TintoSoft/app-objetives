import { useField } from 'formik'
import React from 'react'
import { ColorPicker as ColorPicketComponent, ColorPickerProps } from 'components/ColorPicker'

type FormikInputProps = ColorPickerProps & {
  name: string
}

export const ColorPicker: React.FC<FormikInputProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)

  return (
    <ColorPicketComponent
      value={field.value}
      error={!!meta.error}
      onChangeText={(value) => helpers.setValue(value)}
      {...props}
    />
  )
}
