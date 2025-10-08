import React from 'react'

const styles = {
  userItem: {
    padding: '8px',
    borderBottom: '1px solid #eee',
  },
  list: {
    marginTop: '15px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxHeight: '300px',
    overflowY: 'auto',
  },
}

const UserList = React.memo(({ users }) => {
  console.log('--- Рендеринг UserList ---')

  if (users.length === 0) {
    return <p>Пользователи не найдены.</p>
  }

  return (
    <div style={styles.list}>
      {users.map((user) => (
        <div key={user.id} style={styles.userItem}>
          {user.name} (ID: {user.id})
        </div>
      ))}
    </div>
  )
})

export default UserList
