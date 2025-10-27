import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Вы предпочитаете работать в команде или самостоятельно?',
      options: ['В команде', 'Самостоятельно'],
      answer: null,
    },
    {
      id: 2,
      text: 'Любите ли вы учиться новым технологиям?',
      options: ['Да', 'Нет'],
      answer: null,
    },
    {
      id: 3,
      text: 'Считаете ли вы себя организованным(ой)?',
      options: ['Да', 'Нет'],
      answer: null,
    },
  ],
  submitted: false,
  result: null,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { id, answer } = action.payload
      const q = state.questions.find((x) => x.id === id)
      if (q) q.answer = answer
    },
    submitAnswers(state) {
      const answered = state.questions.every((q) => q.answer !== null)
      if (!answered) {
        state.result = 'Пожалуйста, ответьте на все вопросы.'
        state.submitted = true
        return
      }

      const positiveCount = state.questions.reduce(
        (acc, q) => acc + (q.answer === q.options[0] ? 1 : 0),
        0
      )

      if (positiveCount === state.questions.length) {
        state.result = 'Вы очень позитивно настроены!'
      } else if (positiveCount >= 1) {
        state.result = 'У вас сбалансированные предпочтения.'
      } else {
        state.result = 'Вы склонны к самостоятельной работе.'
      }

      state.submitted = true
    },
    resetSurvey(state) {
      state.questions.forEach((q) => (q.answer = null))
      state.submitted = false
      state.result = null
    },
  },
})

export const { answerQuestion, submitAnswers, resetSurvey } =
  questionnaireSlice.actions
export default questionnaireSlice.reducer
