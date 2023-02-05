import { Progress } from 'core/domain/progress.model'
import { data } from './data'

const getAllProgress = (): Progress[] => {
  return data
}

const updateProgress = (progress: Progress) => {
  console.log(`update progress ${progress.id}`)
}

export const progressService = {
  getAllProgress,
  updateProgress
}
