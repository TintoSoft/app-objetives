import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme'
import React from 'react'
import { TextInput, StyleSheet, TextInputProps, View } from 'react-native'

const styles = StyleSheet.create({
  textInput: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#999',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  error: { borderColor: 'red' },
  label: { marginBottom: theme.spaces.xxs }
})

type Props = TextInputProps & { error?: boolean; label?: string }

export const StyledInputText: React.FC<Props> = ({ style, error, label, ...props }) => {
  const inputStyles = [styles.textInput, error && styles.error, style]
  return (
    <View>
      {label && (
        <StyledText style={styles.label} bold>
          {label}
        </StyledText>
      )}
      <TextInput style={inputStyles} {...props} />
    </View>
  )
}
