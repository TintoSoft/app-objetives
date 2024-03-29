import { Layout } from 'components/Layout'
import { ListItem } from 'components/ListItem'
import { ProgressModal } from 'components/ProgressModal'
import { theme } from 'components/theme'
import { Progress } from 'core/domain/progress.model'
import { useState } from 'react'
import { View, FlatList, ListRenderItem, Button, StyleSheet } from 'react-native'
import { useProcessList } from './useProcessList'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  wrapper: {
    flex: 1,
    marginVertical: theme.spaces.s
  }
})
export const ProgressList = () => {
  const { processList } = useProcessList()

  const [activeProgress, setActiveProgress] = useState<Progress>()

  const handleItemClick = (progress: Progress) => {
    setActiveProgress(progress)
  }

  const handleCloseModal = () => {
    setActiveProgress(undefined)
  }

  if (!processList) return <></>

  const renderList: ListRenderItem<Progress> = ({ item }) => <ListItem progress={item} onItemClick={handleItemClick} />

  return (
    <Layout style={styles.container}>
      <View style={styles.wrapper}>
        <FlatList
          ItemSeparatorComponent={() => <View style={{ paddingTop: theme.spaces.xxs }}></View>}
          data={processList}
          renderItem={renderList}
        />
      </View>
      <ProgressModal activeProgress={activeProgress} onModalClose={handleCloseModal} />
      <Button title="Añadir nuevo progreso" />
    </Layout>
  )
}
