import React, { useState, useMemo, useCallback } from 'react'
import UserList from './components/UserList.jsx'

const initialUsers = [
  { id: 1, name: 'Анна' },
  { id: 2, name: 'Борис' },
  { id: 3, name: 'Виктория' },
  { id: 4, name: 'Алексей' },
  { id: 5, name: 'Ольга' },
  { id: 6, name: 'Светлана' },
  { id: 7, name: 'Елена' },
]

const styles = {
  container: {
    padding: '30px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
  },
  input: {
    padding: '10px',
    width: '100%',
    boxSizing: 'border-box',
    fontSize: '16px',
    border: '1px solid #007bff',
    borderRadius: '4px',
  },
  title: {
    color: '#333',
  },
}

const App = () => {
  const [filter, setFilter] = useState('')
  const [count, setCount] = useState(0)

  const filterUsers = useCallback((text, users) => {
    console.log('--- Вызов filterUsers (Мемоизированная функция) ---')

    if (!text) return users

    const lowerCaseText = text.toLowerCase()

    return users.filter((user) =>
      user.name.toLowerCase().includes(lowerCaseText)
    )
  }, [])

  const filteredList = useMemo(() => {
    console.log('--- Пересчет отфильтрованного списка (useMemo) ---')

    return filterUsers(filter, initialUsers)
  }, [filter, filterUsers])

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Оптимизированный Список Пользователей</h1>

      <input
        type="text"
        placeholder="Начните вводить имя для фильтрации..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        style={styles.input}
      />

      <p>Найдено пользователей: {filteredList.length}</p>

      <button onClick={() => setCount((c) => c + 1)}>
        Рендер App без изменения фильтра (Счетчик: {count})
      </button>

      <UserList users={filteredList} />
    </div>
  )
}

export default App
