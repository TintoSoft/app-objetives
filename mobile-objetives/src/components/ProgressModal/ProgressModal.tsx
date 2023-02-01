import { ImageButton } from 'components/ImageButton'
import { theme } from 'components/theme'
import { Progress } from 'core/domain/progress.model'
import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { FormContent } from './components/FormContent'

const styles = StyleSheet.create({
  modalWrapper: {
    justifyContent: 'center',
    flex: 1
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: theme.spaces.m,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
})

type Props = {
  activeProgress?: Progress
  onModalClose: () => void
}

export const ProgressModal: React.FC<Props> = ({ activeProgress, onModalClose }) => {
  const initialValues = {
    title: activeProgress?.title ?? '',
    category: activeProgress?.category ?? '',
    date: activeProgress?.date ?? new Date(),
    color: activeProgress?.categoryColor ?? ''
  }
  return (
    <Modal visible={!!activeProgress} transparent animationType="slide">
      <View style={styles.modalWrapper}>
        <View style={styles.modalView}>
          <ImageButton
            style={{ marginLeft: 'auto' }}
            onPress={onModalClose}
            imageUrl="https://www.citypng.com/public/uploads/preview/black-square-close-x-button-icon-3163191536344jbn3p5wa.png"
          />
          <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
            <FormContent />
          </Formik>
        </View>
      </View>
    </Modal>
  )
}
