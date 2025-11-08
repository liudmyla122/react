import React from 'react'
import { Link } from 'react-router-dom'
import styles from './NotFoundPage.module.css'

import notFoundImage from '../../assets/images/404:1.png'

const NotFoundPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        {/* Блок с ошибкой 404 и изображением */}
        <div className={styles.codeBlock}>
          <span className={styles.errorCode}>4</span>

          <img
            src={notFoundImage}
            alt="Ошибка 404 - Страница не найдена"
            className={styles.errorImage}
          />
          <span className={styles.errorCode}>4</span>
        </div>

        {/* Заголовок и описание */}
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          We're sorry, the page you requested could not be found. Please go back
          to the homepage.
        </p>

        {/* Кнопка возврата на главную */}
        <Link to="/" className={styles.homeButton}>
          Go Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
