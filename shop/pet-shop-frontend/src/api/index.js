// src/api/index.js

import axios from 'axios'

// Базовый URL, где запущен ваш бэкенд
// Если бэкенд запущен на другом порту (например, 5000), замените 3333
const API_URL = 'http://localhost:3333'

// Создание экземпляра Axios с базовой конфигурацией
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default api
