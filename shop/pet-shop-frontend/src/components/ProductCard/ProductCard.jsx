import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import styles from './ProductCard.module.css'

import { addToCart } from '../../store/cartSlice.js'

const BASE_URL = 'http://localhost:3333/'

const ProductCard = ({ id, title, image, price, discont_price }) => {
  const dispatch = useDispatch()

  const discount = discont_price
    ? Math.round(((price - discont_price) / price) * 100)
    : null

  const productLink = `/products/${id}`
  const imageUrl = `${BASE_URL}${image}`

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch(
      addToCart({
        id,
        title,
        price,
        discont_price,
        image: image,
        quantity: 1,
      })
    )
  }

  return (
    <Link to={productLink} className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={title} className={styles.image} />

        <div className={styles.buttonWrapper}>
          <button className={styles.addToCartButton} onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>

        {discont_price && (
          <div className={styles.discountBadge}>-{discount}%</div>
        )}
      </div>

      <h3 className={styles.title}>{title}</h3>
      <div className={styles.priceContainer}>
        <p className={styles.currentPrice}>
          ${discont_price ? discont_price : price}
        </p>
        {discont_price && <p className={styles.oldPrice}>${price}</p>}
      </div>
    </Link>
  )
}

export default ProductCard
