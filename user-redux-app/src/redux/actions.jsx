// Тип действия
export const SET_USER_INFO = 'SET_USER_INFO'

// Создатель действия (Action Creator)
/**
 * @param {object} userInfo - Объект с данными пользователя (name, status)
 * @returns {object} Действие Redux
 */
export const setUserInfo = (userInfo) => ({
  type: SET_USER_INFO,
  payload: userInfo,
})
