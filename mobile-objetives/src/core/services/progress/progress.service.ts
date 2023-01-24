import { Progress } from 'core/domain/progress.model'
import { data } from './data'

const getAllProgress = (): Progress[] => {
  return data
}

export const progressService = {
  getAllProgress
}
