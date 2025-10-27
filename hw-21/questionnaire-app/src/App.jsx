import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Question from './components/Question/Question'
import Result from './components/Result/Result'
import { submitAnswers } from './features/questionnaire/questionnaireSlice'
import styles from './App.module.css'

function App() {
  const questions = useSelector((state) => state.questionnaire.questions)
  const submitted = useSelector((state) => state.questionnaire.submitted)
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <h1 className={styles.h}>Анкета</h1>

      {!submitted && (
        <div className={styles.list}>
          {questions.map((q) => (
            <Question key={q.id} question={q} />
          ))}
        </div>
      )}

      <div className={styles.controls}>
        {!submitted && (
          <button
            className={styles.submit}
            onClick={() => dispatch(submitAnswers())}
            type="button"
          >
            Отправить
          </button>
        )}

        {submitted && (
          <div className={styles.note}>Результат отображается ниже</div>
        )}
      </div>

      {submitted && <Result />}
    </div>
  )
}

export default App
