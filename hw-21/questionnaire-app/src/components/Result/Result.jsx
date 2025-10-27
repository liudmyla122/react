import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { resetSurvey } from '../../features/questionnaire/questionnaireSlice'
import styles from './Result.module.css'

export default function Result() {
  const questionnaireState = useSelector((state) => state.questionnaire)
  const dispatch = useDispatch()

  if (!questionnaireState) {
    return <div>Загрузка...</div>
  }

  const { submitted, result } = questionnaireState

  if (!submitted) {
    return null
  }

  if (!result) {
    return (
      <div className={styles.wrap}>
        <div className={styles.error}>Результат не найден</div>
      </div>
    )
  }

  const handleReset = () => {
    try {
      dispatch(resetSurvey())
    } catch (error) {
      console.error('Ошибка при сбросе анкеты:', error)
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.title}>Результат</div>
      <div className={styles.text}>{result}</div>
      <button className={styles.reset} onClick={handleReset} type="button">
        Пройти снова
      </button>
    </div>
  )
}
