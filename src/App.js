import React from 'react'
import Filter from './components/Filter'
import UserList from './components/UserList'

function App() {
  return (
    <div
      style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}
    >
      <h2>User List</h2>
      <Filter />
      <UserList />
    </div>
  )
}

export default App
