import React from 'react'
import styles from './OrderSuccessModal.module.css'

const OrderSuccessModal = ({ onClose }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2 className={styles.title}>Congratulations!</h2>
        <p className={styles.message}>
          Your order has been successfully placed on the website.
        </p>
        <p className={styles.message}>
          A manager will contact you shortly to confirm your order.
        </p>
      </div>
    </div>
  )
}

export default OrderSuccessModal
