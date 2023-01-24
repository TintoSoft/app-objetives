import { theme } from 'components/theme'
import React from 'react'
import { StyleSheet, View, ViewProps } from 'react-native'

const styles = StyleSheet.create({
  layout: {
    paddingHorizontal: theme.spaces.xs
  }
})

type Props = ViewProps & {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children, style }) => {
  const layoutStyles = [styles.layout, style]
  return <View style={layoutStyles}>{children}</View>
}
