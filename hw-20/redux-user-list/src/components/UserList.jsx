import React from 'react'
import { useSelector } from 'react-redux'

const UserList = () => {
  const users = useSelector((state) => state.users.list)

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
