import { StyleSheet, View, ScrollView } from 'react-native'
import Constants from 'expo-constants'
import AppBarTab from './components/AppBarTab/AppBarTab'
import { theme } from 'components/theme/theme'
import React from 'react'

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.appBar.primary,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    paddingLeft: 10,
    justifyContent: 'center'
  },
  text: {
    color: theme.appBar.textSecondary,
    paddingHorizontal: 10
  },
  scrollView: {
    paddingBottom: 10,
    paddingTop: 10
  },
  active: {
    color: theme.appBar.textPrimary
  }
})

export const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal style={styles.scrollView}>
        <AppBarTab to="/">Respositories</AppBarTab>
        <AppBarTab to="/singin">Sing in</AppBarTab>
      </ScrollView>
    </View>
  )
}
