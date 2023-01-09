import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme/theme'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Link, useLocation } from 'react-router-native'

const styles = StyleSheet.create({
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

type AppBarTap = {
  to: string
  children: React.ReactNode
}

const AppBarTab: React.FC<AppBarTap> = ({ children, to }) => {
  const { pathname } = useLocation()
  const active = pathname === to
  const textStyles = [styles.text, active && styles.active]

  return (
    <Link to={to}>
      <StyledText style={textStyles} big bold>
        {children}
      </StyledText>
    </Link>
  )
}
export default AppBarTab
