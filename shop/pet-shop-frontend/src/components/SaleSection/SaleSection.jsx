import React, { useEffect, useState } from 'react'
import styles from './SaleSection.module.css'
import ProductCard from '../ProductCard/ProductCard.jsx'

const BASE_URL = 'http://localhost:3333'

const SaleSection = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch(`${BASE_URL}/products/all`)
      .then((res) => res.json())
      .then((data) => {
        const discounted = data
          .filter((product) => product.discont_price !== null)
          .slice(0, 4)
        setProducts(discounted)
      })
      .catch((err) => console.error('Ошибка при загрузке данных:', err))
  }, [])

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Sale</h2>
        <div className={styles.line}></div>
        <a href="/sales" className={styles.allSalesButton}>
          All sales
        </a>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            discont_price={product.discont_price}
          />
        ))}
      </div>
    </section>
  )
}

export default SaleSection
