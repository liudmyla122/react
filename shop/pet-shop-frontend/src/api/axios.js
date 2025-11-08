import axios from 'axios'

// Базовый URL вашего бэкенда, который работает на порту 3333
const BASE_URL = 'http://localhost:3333'

// Создаем и экспортируем настроенный экземпляр Axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
