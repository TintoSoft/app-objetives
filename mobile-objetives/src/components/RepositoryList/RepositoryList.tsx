import { View, FlatList, ListRenderItem } from 'react-native'
import { RepositoryItem } from './components/RepositoryItem/RepositoryItem'
import { Repo, useRepositories } from './useRepositories'

export const RepositoryList = () => {
  const { repositories } = useRepositories()

  const renderList: ListRenderItem<Repo> = ({ item }) => <RepositoryItem {...item} />

  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{ paddingTop: 10 }}></View>}
      data={repositories}
      renderItem={renderList}
    />
  )
}
