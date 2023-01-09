import React from 'react'
import { TextInput, StyleSheet, TextInputProps } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10
  },
  error: { borderColor: 'red' }
})

export const StyledInputText: React.FC<TextInputProps & { error?: boolean }> = ({ style, error, ...props }) => {
  const inputStyles = [styles.textInput, error && styles.error, style]
  return <TextInput style={inputStyles} {...props} />
}
