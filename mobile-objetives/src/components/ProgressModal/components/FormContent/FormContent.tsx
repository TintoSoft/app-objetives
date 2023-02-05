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
  colorPickerWrapper: { marginLeft: theme.spaces.xs, flexBasis: '35%' },
  description: { marginBottom: theme.spaces.s }
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
          placeholder="Escribe la categoria del progreso..."
          style={{ flexBasis: '62%' }}
          label="Categoria"
        />
        <View style={styles.colorPickerWrapper}>
          <ColorPicker name="color" defaultColor="" label="Color" />
        </View>
      </View>
      <View
        style={{
          ...styles.inputWrapper,
          ...{ flexDirection: 'row', alignItems: 'flex-end' }
        }}
      >
        <DatePicker name="date" label="Fecha" style={{ flexBasis: '62%' }} />
        <Input name="amount" label="Cantidad" keyboardType="numeric" style={styles.colorPickerWrapper} />
      </View>

      <View style={{ ...styles.inputWrapper, ...styles.description }}>
        <Input
          name="description"
          label="Descripcion"
          multiline
          numberOfLines={5}
          inputStyles={{ textAlignVertical: 'top' }}
        />
      </View>

      <Button title="Guardar" onPress={() => handleSubmit()} />
    </View>
  )
}
