import { Repo } from 'components/RepositoryList/data'
import { StyledText } from 'components/StyledText'
import { View } from 'react-native'

const parsedThousands = (value: number) => {
  return value >= 1000 ? `${Math.round(value / 100) / 10}k` : String(value)
}

export const RepositoryStats = (item: Repo) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10 }}>
      <View style={{ flexDirection: 'column' }}>
        <StyledText bold>Stars:</StyledText>
        <StyledText center>{parsedThousands(item.stargazersCount)}</StyledText>
      </View>
      <View>
        <StyledText bold>Forks:</StyledText>
        <StyledText center>{parsedThousands(item.forksCount)}</StyledText>
      </View>
      <View>
        <StyledText bold>Review:</StyledText>
        <StyledText center>{parsedThousands(item.reviewCount)}</StyledText>
      </View>
      <View>
        <StyledText bold>Stars:</StyledText>
        <StyledText center>{parsedThousands(item.ratingAverage)}</StyledText>
      </View>
    </View>
  )
}
