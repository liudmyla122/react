import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Контакты</h3>
          <div className={styles.contactInfo}>
            <p className={styles.contactItem}>8 800 000 00 00</p>
            <p className={styles.contactItem}>emailexample@email.com</p>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h3 className={styles.footerTitle}>Подписка</h3>
          <div className={styles.subscription}>
            <input
              type="email"
              placeholder="Введите свой email"
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Подписаться</button>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © 2024 Сникер-магазин. Все права защищены
        </p>
      </div>
    </footer>
  )
}

export default Footer
