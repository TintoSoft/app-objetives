import { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

const styles = StyleSheet.create({
  text: { fontSize: 12, color: 'grey' },
  bold: { fontWeight: 'bold' },
  blue: { color: 'blue' },
  big: { fontSize: 18 },
  small: { fontSize: 10 },
  center: { textAlign: 'center' }
})

type Props = {
  blue?: boolean
  big?: boolean
  bold?: boolean
  small?: boolean
  center?: boolean
  children: ReactNode
  style?: TextStyle
}
export const StyledText: FC<Props & TextProps> = ({
  children,
  bold,
  blue,
  big,
  small,
  center,
  style,
  ...restProps
}) => {
  const textStyles = [
    styles.text,
    blue && styles.blue,
    bold && styles.bold,
    small && styles.small,
    center && styles.center,
    big && styles.big,
    style
  ]
  return (
    <Text style={textStyles} {...restProps}>
      {children}
    </Text>
  )
}
