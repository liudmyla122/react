import React from 'react'
import { FaPhone, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <section className={styles.contactSection}>
      <h2 className={styles.mainTitle}>Contact</h2>

      <div className={styles.contentGrid}>
        <div className={styles.infoBlock}>
          <p className={styles.label}>Phone</p>
          <p className={styles.value}>+49 30 915-88492</p>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.label}>Socials</p>
          <div className={styles.socials}>
            <FaInstagram className={styles.socialIcon} />
            <FaWhatsapp className={styles.socialIcon} />
          </div>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.label}>Address</p>
          <p className={styles.value}>
            Wallstraße 9-13, 10179 Berlin, Deutschland
          </p>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.label}>Working Hours</p>
          <p className={styles.value}>24 hours a day</p>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <p className={styles.mapPlaceholder}>Placeholder for Google Map</p>
      </div>
    </section>
  )
}

export default ContactSection
