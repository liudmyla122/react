import React from 'react'
import { Link } from 'react-router-dom'
import styles from './CategoryCard.module.css'

const BASE_URL = 'http://localhost:3333'

const CategoryCard = ({ id, title, image }) => {
  const categoryLink = `/categories/${id}`

  const imageUrl = `${BASE_URL}${image}`

  return (
    <Link to={categoryLink} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />
      </div>
      <p className={styles.title}>{title}</p>
    </Link>
  )
}

export default CategoryCard
