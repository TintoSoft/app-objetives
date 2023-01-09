import { View, StyleSheet } from 'react-native'
import { Repo } from '../../data'
import { RepositoryItemHeader } from '../RepositoryItemHeader'
import { RepositoryStats } from '../RepositoryStats'

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5,
    fontSize: 18
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export const RepositoryItem = (item: Repo) => {
  return (
    <View key={item.id} style={styles.container}>
      <RepositoryItemHeader {...item} />
      <RepositoryStats {...item} />
    </View>
  )
}
