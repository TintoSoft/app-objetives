import { theme } from 'components/theme'
import { FC, ReactNode } from 'react'
import { StyleSheet, Text, TextProps, TextStyle } from 'react-native'

const styles = StyleSheet.create({
  text: { color: 'grey' },
  bold: { fontWeight: 'bold' },
  big: { fontSize: theme.fontSizes.big },
  small: { fontSize: 10 },
  inverted: { color: theme.colors.white },
  center: { textAlign: 'center' }
})

type Props = {
  big?: boolean
  bold?: boolean
  small?: boolean
  center?: boolean
  inverted?: boolean
  children: ReactNode
  style?: TextStyle
}
export const StyledText: FC<Props & TextProps> = ({
  children,
  bold,
  big,
  inverted,
  small,
  center,
  style,
  ...restProps
}) => {
  const textStyles = [
    styles.text,
    bold && styles.bold,
    small && styles.small,
    center && styles.center,
    inverted && styles.inverted,
    big && styles.big,
    style
  ]
  return (
    <Text style={textStyles} {...restProps}>
      {children}
    </Text>
  )
}
