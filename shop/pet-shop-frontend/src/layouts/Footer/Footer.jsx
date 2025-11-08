import React from 'react'
import styles from './Footer.module.css'

import instagramUrl from '../../assets/icons/ic-instagram.svg'
import whatsappUrl from '../../assets/icons/ic-whatsapp.svg'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h2 className={styles.title}>Contact</h2>

        <div className={styles.infoGrid}>
          <div className={styles.infoBlock}>
            <p className={styles.label}>Phone</p>
            <a href="tel:+493091588492" className={styles.value}>
              +49 30 915-88492
            </a>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.label}>Socials</p>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/ВАШЕ_ИМЯ_INSTAGRAM"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
              >
                <img
                  src={instagramUrl}
                  alt="Instagram"
                  className={styles.socialImgIcon}
                />
              </a>

              <a
                href="https://wa.me/НОМЕР_ТЕЛЕФОНА"
                target="_blank"
                rel="noopener noreferrer"
                title="WhatsApp"
              >
                <img
                  src={whatsappUrl}
                  alt="WhatsApp"
                  className={styles.socialImgIcon}
                />
              </a>
            </div>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.label}>Address</p>
            <address className={styles.value}>
              Wallstraße 9-13, 10179 Berlin, Deutschland
            </address>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.label}>Working Hours</p>
            <p className={styles.value}>24 hours a day</p>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.704207904099!2d13.402379915951333!3d52.51114397981504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e201b190001%3A0x6a1b0728c0b6b23b!2sWallstra%C3%9Fe%209-13%2C%2010179%20Berlin!5e0!3m2!1sen!2sde!4v1636040100000!5m2!1sen!2sde"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className={styles.mapIframe}
            title="Интерактивная карта с местоположением магазина в Берлине"
          ></iframe>
        </div>
      </div>
    </footer>
  )
}

export default Footer
