import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx start working on your app probando</Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
