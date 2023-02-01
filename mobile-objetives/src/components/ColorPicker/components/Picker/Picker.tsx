import { useRef } from 'react'
import { SafeAreaView } from 'react-native'
import Canvas from 'react-native-canvas'

export const Picker = () => {
  const ref = useRef(null)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Canvas ref={ref} style={{ width: '100%', height: '100%', backgroundColor: 'black' }} />
    </SafeAreaView>
  )
}
