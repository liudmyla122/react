import React from 'react'
import { useDispatch } from 'react-redux'
import { answerQuestion } from '../../features/questionnaire/questionnaireSlice'
import styles from './Question.module.css'

const Question = ({ question }) => {
  const dispatch = useDispatch()

  const handleAnswer = (answer) => {
    dispatch(answerQuestion({ id: question.id, answer }))
  }

  return (
    <div className={styles.question}>
      <h3 className={styles.questionText}>{question.text}</h3>
      <div className={styles.options}>
        {question.options.map((option, index) => (
          <label key={index} className={styles.option}>
            <input
              type="radio"
              name={`question-${question.id}`}
              value={option}
              checked={question.answer === option}
              onChange={() => handleAnswer(option)}
              className={styles.radio}
            />
            <span className={styles.optionText}>{option}</span>
          </label>
        ))}
      </div>
    </div>
  )
}

export default Question
