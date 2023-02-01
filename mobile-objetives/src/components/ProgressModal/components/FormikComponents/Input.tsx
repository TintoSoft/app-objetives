import { StyledInputText, StyledInputTextProps } from 'components/StyledInputText'
import { useField } from 'formik'
import React from 'react'

type FormikInputProps = StyledInputTextProps & {
  name: string
}

export const Input: React.FC<FormikInputProps> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledInputText
        value={field.value}
        error={!!meta.error}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {/* {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>} */}
    </>
  )
}
