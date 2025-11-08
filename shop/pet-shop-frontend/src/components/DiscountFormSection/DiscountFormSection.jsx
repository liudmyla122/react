import React, { useState } from 'react'
import styles from './DiscountFormSection.module.css'

import animalsImage from '../../assets/images/animals.svg'

const BASE_URL = 'http://localhost:3333'

const DiscountFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  })

  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setMessage('')

    try {
      const response = await fetch(`${BASE_URL}/sale/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessage('Купон отправлен! Проверьте почту.')
        setFormData({ name: '', phone: '', email: '' })
      } else {
        const errorData = await response.json()
        setMessage(
          `❌ Ошибка: ${errorData.message || 'Не удалось получить скидку.'}`
        )
      }
    } catch (error) {
      console.error('Submission error:', error)
      setMessage('❌ Произошла ошибка сети. Попробуйте позже.')
    }
  }

  return (
    <section className={styles.discountSection}>
      <div
        className={styles.contentWrapper}
        style={{ backgroundImage: `url(${animalsImage})` }}
      >
        <h2 className={styles.title}>5% off on the first order</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.input}
          />

          <button type="submit" className={styles.submitButton}>
            Get a discount
          </button>

          {message && <p className={styles.message}>{message}</p>}
        </form>
      </div>
    </section>
  )
}

export default DiscountFormSection
