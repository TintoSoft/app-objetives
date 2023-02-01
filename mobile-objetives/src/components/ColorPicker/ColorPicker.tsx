import { theme } from 'components/theme'
import React, { useState } from 'react'
import { View, StyleSheet, TextInput, TextInputProps } from 'react-native'
// import { Picker } from './components/Picker'

const styles = StyleSheet.create({
  container: {
    borderColor: theme.colors.inputBorder,
    borderWidth: 1,
    paddingVertical: theme.spaces.xs,
    paddingHorizontal: theme.spaces.xxs,
    borderRadius: theme.radius.s,
    flexDirection: 'row',
    alignItems: 'center'
  },
  colorWrapper: {
    width: 16,
    height: 16,
    borderRadius: theme.radius.m,
    marginRight: theme.spaces.xxs
  },
  input: {
    fontWeight: theme.fontWeight.bold
  }
  // colorPickerWrapper: { width: 100, height: 100 }
})

export type ColorPickerProps = TextInputProps & {
  error?: boolean
  defaultColor?: string
  onPickerBlur?: (color?: string) => void
}
export const ColorPicker: React.FC<ColorPickerProps> = ({ defaultColor, onPickerBlur, onChangeText, ...restProps }) => {
  const [color, setColor] = useState(defaultColor)

  const RegExp = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i
  const isValidColor = !!color && RegExp.test(color)

  const handleChange = (text: string) => {
    setColor(text)
    onChangeText && onChangeText(text)
  }

  const handleBlur = () => {
    onPickerBlur && onPickerBlur(isValidColor ? color : undefined)
  }

  return (
    <View style={styles.container}>
      <View style={{ ...styles.colorWrapper, ...(isValidColor && { backgroundColor: color }) }} />
      <TextInput
        maxLength={7}
        style={styles.input}
        value={color}
        onChangeText={handleChange}
        onBlur={handleBlur}
        {...restProps}
      />
      {/* <View style={styles.colorPickerWrapper}>
        <Picker />
      </View> */}
    </View>
  )
}
