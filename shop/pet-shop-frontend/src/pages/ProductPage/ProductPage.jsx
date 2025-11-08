import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import api from '../../api/axios'
import { addToCart } from '../../store/cartSlice'
import styles from './ProductPage.module.css'

const ProductPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [product, setProduct] = useState(null)
  const [count, setCount] = useState(1)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`)
        const data = Array.isArray(response.data)
          ? response.data[0]
          : response.data
        if (data) setProduct(data)
        else setError('Сервер не вернул данные о продукте')
      } catch {
        setError('Не удалось загрузить данные о продукте')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleAddToCart = () => {
    if (product)
      dispatch(addToCart({ ...product, quantity: count, image: product.image }))
  }

  const toggleDescription = () => setIsExpanded(!isExpanded)

  if (loading)
    return <div className="text-center py-20 text-xl">Загрузка...</div>
  if (error)
    return <div className="text-center py-20 text-red-500">{error}</div>
  if (!product)
    return (
      <div className="text-center py-20 text-gray-500">Продукт не найден</div>
    )

  const imageUrl =
    product.image && typeof product.image === 'string'
      ? product.image.startsWith('http')
        ? product.image
        : `http://localhost:3333${product.image}`
      : 'https://via.placeholder.com/400x400?text=No+Image'

  const discount = product.discont_price
    ? Math.round(100 - (product.discont_price / product.price) * 100)
    : 0

  return (
    <div className={styles.container}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <button className={styles.breadcrumb} onClick={() => navigate('/')}>
          Main page
        </button>
        <button
          className={styles.breadcrumb}
          onClick={() => navigate('/categories')}
        >
          Categories
        </button>
        <button className={styles.breadcrumb}>Dry & Wet Food</button>
        <button className={`${styles.breadcrumb} ${styles.breadcrumbActive}`}>
          Dry Dog Food
        </button>
      </div>

      {/* Product Layout */}
      <div className={styles.productLayout}>
        <div className={styles.imageSection}>
          <div className={styles.mainImage}>
            <img src={imageUrl} alt={product.title} />
          </div>
          <div className={styles.thumbnails}>
            <div className={styles.thumbnail}>
              <img src={imageUrl} alt={product.title} />
            </div>
            <div className={styles.thumbnail}>
              <img src={imageUrl} alt={product.title} />
            </div>
            <div className={styles.thumbnail}>
              <img src={imageUrl} alt={product.title} />
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{product.title}</h1>
          <div className={styles.priceSection}>
            <span className={styles.currentPrice}>
              ${product.discont_price || product.price}
            </span>
            {product.discont_price && (
              <>
                <span className={styles.oldPrice}>${product.price}</span>
                <span className={styles.discountBadge}>-{discount}%</span>
              </>
            )}
          </div>

          <div className={styles.controls}>
            <div className={styles.quantity}>
              <button
                className={styles.quantityBtn}
                onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
              >
                −
              </button>
              <span className={styles.quantityValue}>{count}</span>
              <button
                className={styles.quantityBtn}
                onClick={() => setCount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button className={styles.addToCartBtn} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>

          {/* Description */}
          <div
            className={`${styles.descriptionSection} ${
              isExpanded ? styles.descriptionSectionExpanded : ''
            }`}
          >
            <h2 className={styles.descriptionTitle}>Description</h2>
            <p
              className={`${styles.descriptionText} ${
                isExpanded ? styles.descriptionTextExpanded : ''
              }`}
            >
              {product.description}
            </p>
            {product.description && product.description.length > 150 && (
              <span className={styles.readMore} onClick={toggleDescription}>
                {isExpanded ? 'Show less' : 'Read more'}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
