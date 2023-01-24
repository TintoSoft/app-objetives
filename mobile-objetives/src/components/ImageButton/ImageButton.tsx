import React from 'react'
import { theme } from 'components/theme'
import { TouchableOpacity, View, Image, StyleSheet, ViewProps } from 'react-native'
import { StyledText } from 'components/StyledText'
const styles = StyleSheet.create({
  buttonBasicStyles: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  buttonWithText: { padding: theme.spaces.xs, borderRadius: theme.radius.s },
  iconBasicStyles: { width: 40, height: 40 },
  iconWithText: {
    marginRight: theme.spaces.s
  }
})

type Props = {
  text?: string
  imageUrl: string
  onPress: () => void
}

export const ImageButton: React.FC<Props & ViewProps> = ({ imageUrl, text, onPress, style }) => {
  const iconStyles = [styles.iconBasicStyles, !!text && styles.iconWithText]
  const buttonStyles = [styles.buttonBasicStyles, !!text && styles.buttonWithText, style]

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        <Image style={iconStyles} source={{ uri: imageUrl }} />
        {!!text && <StyledText big>{text}</StyledText>}
      </View>
    </TouchableOpacity>
  )
}
