import { Repo } from 'components/RepositoryList/data'
import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme/theme'
import { View, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  image: {
    width: 48,
    height: 48,
    borderRadius: 4
  }
})

export const RepositoryItemHeader = (item: Repo) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <Image style={styles.image} source={{ uri: item.ownerAvatarUrl }} />
      <View style={{ paddingLeft: 10, flexGrow: 1 }}>
        <StyledText bold big>
          {item.id}
        </StyledText>
        <StyledText blue>{item.fullName} </StyledText>
        <StyledText>{item.description}</StyledText>
        <StyledText style={{ backgroundColor: theme.colors.primary, alignSelf: 'flex-start' }}>
          {item.language}
        </StyledText>
      </View>
    </View>
  )
}
