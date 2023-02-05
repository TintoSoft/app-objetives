import { ImageButton } from 'components/ImageButton'
import { theme } from 'components/theme'
import { Progress } from 'core/domain/progress.model'
import React from 'react'
import { Modal, View, StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { FormContent } from './components/FormContent'
import { progressService } from 'core/services/progress'

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

type FormFields = {
  title: string
  category: string
  date: Date
  color: string
  description: string
  amount: string
}

export const ProgressModal: React.FC<Props> = ({ activeProgress, onModalClose }) => {
  const initialValues: FormFields = {
    title: activeProgress?.title ?? '',
    category: activeProgress?.category ?? '',
    date: activeProgress?.date ?? new Date(),
    color: activeProgress?.categoryColor ?? '',
    description: activeProgress?.description ?? '',
    amount: activeProgress?.amount.toString() ?? '0'
  }

  const handleSubmit = (values: FormFields) => {
    if (activeProgress) {
      progressService.updateProgress({
        id: activeProgress?.id,
        title: values.title,
        description: values.description,
        category: values.category,
        categoryColor: values.color,
        amount: Number(values.amount),
        date: values.date
      })
    }

    onModalClose()
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
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            <FormContent />
          </Formik>
        </View>
      </View>
    </Modal>
  )
}
