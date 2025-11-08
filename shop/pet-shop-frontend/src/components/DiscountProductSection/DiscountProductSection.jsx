import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSaleProducts, selectSaleProducts } from '../../store/productSlice'
import styles from './DiscountProductSection.module.css'

function DiscountProductSection() {
  const dispatch = useDispatch()
  const saleProducts = useSelector(selectSaleProducts)

  useEffect(() => {
    dispatch(fetchSaleProducts())
  }, [dispatch])

  if (!saleProducts || saleProducts.length === 0) {
    return (
      <section className={styles.sectionContainer}>
        <h2>Sale</h2>
        <p>Загрузка товаров со скидкой...</p>
      </section>
    )
  }

  const productsToShow = saleProducts.slice(0, 4)

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>

        <Link to="/sales" className={styles.allSalesButton}>
          All sales
        </Link>
      </div>

      <div className={styles.productsGrid}>
        {productsToShow.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className={styles.productLink}
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default DiscountProductSection
