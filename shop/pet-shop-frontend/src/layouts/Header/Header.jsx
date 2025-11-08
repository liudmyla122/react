import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from './Header.module.css'

import logoImage from '../../assets/icons/logo.svg'
import cartImage from '../../assets/icons/icon.svg'

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items)

  const totalQuantity = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logoLink} title="На главную">
        <img src={logoImage} alt="Logo" className={styles.logoIcon} />
      </Link>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Main Page
        </NavLink>
        <NavLink
          to="/categories"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          Categories
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          All products
        </NavLink>
        <NavLink
          to="/sales"
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
        >
          All sales
        </NavLink>
      </nav>

      <Link to="/cart" className={styles.cartLink} title="Перейти в корзину">
        <img src={cartImage} alt="Cart" className={styles.cartIcon} />

        {totalQuantity > 0 && (
          <span className={styles.cartCount}>{totalQuantity}</span>
        )}
      </Link>
    </header>
  )
}

export default Header
