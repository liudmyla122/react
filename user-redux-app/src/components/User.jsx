import React from 'react'
import { connect } from 'react-redux'

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '15px',
    margin: '20px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
  title: {
    color: '#007bff',
  },
}

const User = ({ name, status }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Текущая информация о пользователе:</h2>
      <p>
        <strong>Имя:</strong> {name}
      </p>
      <p>
        <strong>Статус:</strong> {status}
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  name: state.user.name,
  status: state.user.status,
})

export default connect(mapStateToProps)(User)
