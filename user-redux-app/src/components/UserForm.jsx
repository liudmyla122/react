import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setUserInfo } from '../redux/actions'

const styles = {
  container: {
    border: '1px solid #e0e0e0',
    padding: '20px',
    margin: '20px',
    borderRadius: '5px',
    backgroundColor: '#fff',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  input: {
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
}

const UserForm = ({ dispatchSetUserInfo }) => {
  const [name, setName] = useState('')
  const [status, setStatus] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || status.trim() === '') {
      setError('Имя и статус не могут быть пустыми.')
      return
    }

    dispatchSetUserInfo({ name, status })

    setName('')
    setStatus('')
    setError('')
  }

  return (
    <div style={styles.container}>
      <h2>Изменить информацию</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div>
          <input
            type="text"
            placeholder="Новое имя"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Новый статус"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            style={styles.input}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit" style={styles.button}>
          Обновить
        </button>
      </form>
    </div>
  )
}

const mapDispatchToProps = {
  dispatchSetUserInfo: setUserInfo,
}

export default connect(null, mapDispatchToProps)(UserForm)
