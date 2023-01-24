import { Progress } from 'core/domain/progress.model'
import { progressService } from 'core/services/progress'
import { useState, useEffect } from 'react'

export const useProcessList = () => {
  const [processList, setProcessList] = useState<Progress[]>()

  const getData = async () => {
    const rawProccesList = await progressService.getAllProgress()
    setProcessList(rawProccesList)
  }
  useEffect(() => {
    getData()
  }, [])

  return { processList }
}
