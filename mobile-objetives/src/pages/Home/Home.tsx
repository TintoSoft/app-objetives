import { StyledText } from 'components/StyledText'
import { Layout } from 'components/Layout'
import { StyleSheet, View } from 'react-native'
import { theme } from 'components/theme'
import { ImageButton } from 'components/ImageButton'
import { useNavigate } from 'react-router-native'

const styles = StyleSheet.create({
  gaph: {
    height: 300,
    backgroundColor: 'red'
  },
  content: {
    marginTop: theme.spaces.s
  },
  separator: {
    marginTop: theme.spaces.s
  },
  button: {
    backgroundColor: '#56f5ef'
  }
})

export const Home = () => {
  const navigate = useNavigate()

  const handlePress = (to: string) => {
    navigate(to)
  }
  return (
    <Layout>
      <View style={styles.gaph}>
        <StyledText>Aqui ira el grafico</StyledText>
      </View>
      <View style={styles.content}>
        <ImageButton
          text="Añadir progreso"
          imageUrl="https://picsum.photos/30/30"
          style={styles.button}
          onPress={() => handlePress('progresslist')}
        />
        <View style={styles.separator} />
        <ImageButton
          text="Añadir objetivos"
          imageUrl="https://picsum.photos/30/30"
          style={styles.button}
          onPress={() => handlePress('singin')}
        />
      </View>
    </Layout>
  )
}
