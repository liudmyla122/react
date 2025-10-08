import React from 'react'
import User from './components/User.jsx'
import UserForm from './components/UserForm.jsx'

const App = () => {
  return (
    <div
      style={{
        padding: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>Управление Пользователем (Redux)</h1>
      <User />
      <UserForm />
    </div>
  )
}

export default App
