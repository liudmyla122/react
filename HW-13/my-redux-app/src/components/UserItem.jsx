import React from 'react'
import styles from '../styles/UserItem.module.css'

function UserItem({ name }) {
  return <li className={styles.item}>{name}</li>
}

export default UserItem
