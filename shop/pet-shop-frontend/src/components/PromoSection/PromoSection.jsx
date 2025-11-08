import React from 'react'
import { Link } from 'react-router-dom'
import styles from './PromoSection.module.css'
import bannerImage from '../../assets/images/img.svg'

const PromoSection = () => {
  return (
    <section
      className={styles.promoSection}
      style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>
          Amazing Discounts
          <br />
          on Pets Products!
        </h1>

        <Link to="/sales" className={styles.checkOutButton}>
          Check out
        </Link>
      </div>
    </section>
  )
}

export default PromoSection
