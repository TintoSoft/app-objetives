import { Button, View, StyleSheet, TextInputProps } from 'react-native'
import { Formik, useField } from 'formik'
import { StyledInputText } from 'components/StyledInputText'
import React from 'react'
import { StyledText } from 'components/StyledText'
import { loginValidationSchema } from 'utils/validationSchema'

const styles = StyleSheet.create({
  form: { margin: 12 },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
})
const initialValues = {
  email: '',
  password: ''
}

type Props = TextInputProps & {
  name: string
}
const FormikInput: React.FC<Props> = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledInputText
        value={field.value}
        error={!!meta.error}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

export const Login = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={loginValidationSchema}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInput placeholder="E-mail" name="email" />
            <FormikInput placeholder="Password" name="password" />
            <Button onPress={() => handleSubmit()} title="Enviar" />
          </View>
        )
      }}
    </Formik>
  )
}
