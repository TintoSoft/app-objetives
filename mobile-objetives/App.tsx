import { Main } from 'pages/Main'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </>
  )
}

export default registerRootComponent(App)
