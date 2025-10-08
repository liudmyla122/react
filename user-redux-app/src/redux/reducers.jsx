import { SET_USER_INFO } from './actions'

const initialState = {
  user: {
    name: 'Аноним',
    status: 'Офлайн',
  },
}

/**
 * Редьюсер для управления состоянием пользователя.
 * @param {object} state - Текущее состояние.
 * @param {object} action - Выполняемое действие.
 * @returns {object} Новое состояние.
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        user: {
          name: action.payload.name,
          status: action.payload.status,
        },
      }
    default:
      return state
  }
}

export default userReducer
