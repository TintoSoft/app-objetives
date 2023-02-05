import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme'
import React from 'react'
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: theme.radius.s,
    borderWidth: 1,
    borderColor: theme.colors.inputBorder,
    paddingHorizontal: theme.spaces.m,
    paddingVertical: theme.spaces.xs
  },
  error: { borderColor: theme.colors.error },
  label: { marginBottom: theme.spaces.xxs }
})

export type StyledInputTextProps = TextInputProps & { error?: boolean; label?: string; inputStyles?: TextInputProps }

export const StyledInputText: React.FC<StyledInputTextProps> = ({ style, error, label, inputStyles, ...props }) => {
  const inputAllStyles = [styles.textInput, error && styles.error, inputStyles]

  return (
    <View style={style}>
      {label && (
        <StyledText style={styles.label} bold>
          {label}
        </StyledText>
      )}
      <TextInput style={inputAllStyles} {...props} />
    </View>
  )
}
