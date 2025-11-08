// src/main.jsx

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store' // Импортируем наш созданный store
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Оборачиваем App в Provider и передаем ему наш store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
