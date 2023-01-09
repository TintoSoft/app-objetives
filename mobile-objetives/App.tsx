import { ApolloClient, ApolloProvider } from '@apollo/client'
import { Main } from 'components/Main'
import { registerRootComponent } from 'expo'
import { StatusBar } from 'expo-status-bar'
import { NativeRouter } from 'react-router-native'
import createApolloClient from 'utils/apolloClient'

const apolloClient = createApolloClient() as unknown as ApolloClient<unknown>

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <StatusBar style="light" />
      <NativeRouter>
        <Main />
      </NativeRouter>
    </ApolloProvider>
  )
}

export default registerRootComponent(App)
