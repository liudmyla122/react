import React from 'react'
import styles from './Contacts.module.css'

import snapchatIcon from '../../assets/icon/icon snapchat.svg'
import facebookIcon from '../../assets/icon/facebook.svg'
import xIcon from '../../assets/icon/x_icon.svg'

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Сообщение отправлено!')
  }

  return (
    <div className={styles.contactsPage}>
      <div className={styles.container}>
        <div className={styles.contactHeader}>
          <h1 className={styles.title}>Контакты</h1>
          <ul className={styles.contactList}>
            <li className={styles.contactItem}>8 800 000 00 00</li>
            <li className={styles.contactItem}>emailexample@email.com</li>
          </ul>
        </div>

        <div className={styles.contentWrapper}>
          <div className={styles.formSection}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="email"
                  placeholder="Ваш email"
                  className={styles.formInput}
                  required
                />
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className={styles.formInput}
                  required
                />
              </div>

              <textarea
                placeholder="Введите сообщение"
                className={styles.formTextarea}
                rows="4"
                required
              ></textarea>

              <button type="submit" className={styles.submitButton}>
                Отправить
              </button>
            </form>
          </div>

          <div className={styles.socialSection}>
            <p className={styles.socialTitle}>Найдите нас:</p>
            <div className={styles.socialIcons}>
              <div className={styles.iconWrapper}>
                <img
                  src={snapchatIcon}
                  alt="Snapchat"
                  className={styles.icon}
                />
              </div>
              <div className={styles.iconWrapper}>
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className={styles.icon}
                />
              </div>
              <div className={styles.iconWrapper}>
                <img src={xIcon} alt="X" className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts
