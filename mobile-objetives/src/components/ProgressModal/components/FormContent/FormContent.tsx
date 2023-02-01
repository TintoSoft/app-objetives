import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { useFormikContext } from 'formik'
import { theme } from 'components/theme'
import { DatePicker, Input, ColorPicker } from '../FormikComponents'

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: theme.spaces.s
  },
  category: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  colorPickerWrapper: { marginLeft: theme.spaces.xs, flexBasis: '35%' }
})

export const FormContent = () => {
  const { handleSubmit } = useFormikContext()

  return (
    <View>
      <View style={styles.inputWrapper}>
        <Input name="title" placeholder="Escribe el titulo del progreso..." label="Titulo" />
      </View>
      <View style={{ ...styles.inputWrapper, ...styles.category }}>
        <Input
          name="category"
          style={{ flexBasis: '62%' }}
          placeholder="Escribe la categoria del progreso..."
          label="Categoria"
        />
        <View style={styles.colorPickerWrapper}>
          <ColorPicker name="color" defaultColor="" />
        </View>
      </View>
      <View style={styles.inputWrapper}>
        <DatePicker name="date" label="Fecha" />
      </View>

      <Button title="Enviar" onPress={() => handleSubmit()} />
    </View>
  )
}
