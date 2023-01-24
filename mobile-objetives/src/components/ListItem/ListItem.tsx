import { StyledText } from 'components/StyledText'
import { theme } from 'components/theme'
import { Progress } from 'core/domain/progress.model'
import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  container: {
    padding: theme.spaces.xs,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f3f3f3'
  },
  leftContent: { flexShrink: 1 },
  titleWrapper: { marginTop: theme.spaces.xxs, marginLeft: theme.spaces.xs },
  rightContent: {
    alignItems: 'center',
    marginLeft: theme.spaces.xxs
  },
  categoryPill: {
    backgroundColor: 'green',
    borderRadius: theme.radius.m,
    padding: theme.spaces.xxs,
    marginBottom: theme.spaces.xxs
  }
})

type Props = {
  progress: Progress
  onItemClick: (progress: Progress) => void
}

export const ListItem: React.FC<Props> = ({ progress, onItemClick }) => {
  const { id, title, description, category, date, categoryColor } = progress

  return (
    <TouchableOpacity onPress={() => onItemClick(progress)}>
      <View style={styles.container} key={id}>
        <View style={styles.leftContent}>
          <StyledText big>{title}</StyledText>
          <View style={styles.titleWrapper}>
            <StyledText small numberOfLines={1}>
              {description}
            </StyledText>
          </View>
        </View>

        <View style={styles.rightContent}>
          <View style={{ ...styles.categoryPill, backgroundColor: categoryColor }}>
            <StyledText small inverted>
              {category}
            </StyledText>
          </View>
          <StyledText small>{date.toLocaleDateString()}</StyledText>
        </View>
      </View>
    </TouchableOpacity>
  )
}
