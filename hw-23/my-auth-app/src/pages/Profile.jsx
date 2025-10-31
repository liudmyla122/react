import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../redux/authSlice'

function Profile() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Профиль</h2>
      {user ? (
        <p>Добро пожаловать, {user.name}!</p>
      ) : (
        <p>Нет данных пользователя</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile
