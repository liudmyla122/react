import { configureStore } from '@reduxjs/toolkit'
import questionnaireReducer from './features/questionnaire/questionnaireSlice'

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireReducer,
  },
})

export default store
