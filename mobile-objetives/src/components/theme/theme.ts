import { TextStyle } from 'react-native'

type Spaces = {
  xxs: number
  xs: number
  s: number
  m: number
  l: number
  xl: number
  xxl: number
  xxxl: number
  xxxxl: number
}

type FontSizes = {
  big: number
  small: number
}

type FontWeight = {
  normal: TextStyle['fontWeight']
  bold: TextStyle['fontWeight']
}
type Radius = {
  s: number
  m: number
  l: number
}
type Colors = {
  [key: string]: string
}

type Theme = {
  appBar: Colors
  colors: Colors
  fontSizes: FontSizes
  fontWeight: FontWeight
  spaces: Spaces
  radius: Radius
}
export const theme: Theme = {
  appBar: {
    primary: '#24292e',
    textPrimary: '#fff',
    textSecondary: '#586069'
  },
  colors: {
    textPrimary: '#24292e',
    textSecondary: '#586069',
    primary: '#32CBFF',
    white: '#fefefe',
    inputBorder: '#999',
    error: '#ff2342'
  },
  fontSizes: {
    big: 18,
    small: 10
  },
  fontWeight: {
    normal: '400',
    bold: '700'
  },
  spaces: {
    xxs: 5,
    xs: 10,
    s: 15,
    m: 20,
    l: 30,
    xl: 40,
    xxl: 50,
    xxxl: 60,
    xxxxl: 70
  },
  radius: {
    s: 5,
    m: 10,
    l: 15
  }
}
