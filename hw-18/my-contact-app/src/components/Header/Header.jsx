import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            Сникер-магазин
          </Link>
        </div>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Главная
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/catalog" className={styles.navLink}>
              Каталог
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/contacts" className={styles.navLink}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
