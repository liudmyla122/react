import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './AllProductsPage.module.css'

import {
  fetchAllProducts,
  selectAllProducts,
  selectAllProductsStatus,
  selectAllProductsError,
} from '../../store/productSlice'

import ProductCard from '../../components/ProductCard/ProductCard'
import Filters from '../../components/Filters/Filters'

const INITIAL_DISPLAY_COUNT = 12

const AllProductsPage = () => {
  const dispatch = useDispatch()

  const allProducts = useSelector(selectAllProducts)
  const status = useSelector(selectAllProductsStatus)
  const error = useSelector(selectAllProductsError)

  const [priceRange, setPriceRange] = useState({ from: '', to: '' })
  const [discountedOnly, setDiscountedOnly] = useState(false)
  const [sortType, setSortType] = useState('default')
  const [filteredAndSortedList, setFilteredAndSortedList] = useState([])

  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [status, dispatch])

  useEffect(() => {
    let list = [...allProducts]

    if (discountedOnly) {
      list = list.filter((p) => p.discont_price)
    }

    const priceFrom = parseFloat(priceRange.from)
    const priceTo = parseFloat(priceRange.to)

    if (!isNaN(priceFrom)) {
      list = list.filter((p) => (p.discont_price || p.price) >= priceFrom)
    }
    if (!isNaN(priceTo)) {
      list = list.filter((p) => (p.discont_price || p.price) <= priceTo)
    }

    if (sortType === 'title-asc') {
      list.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortType === 'price-asc') {
      list.sort(
        (a, b) => (a.discont_price || a.price) - (b.discont_price || b.price)
      )
    } else if (sortType === 'price-desc') {
      list.sort(
        (a, b) => (b.discont_price || b.price) - (a.discont_price || a.price)
      )
    }

    setFilteredAndSortedList(list)

    setDisplayCount(INITIAL_DISPLAY_COUNT)
  }, [allProducts, discountedOnly, priceRange, sortType])

  const handleShowAllProducts = () => {
    if (displayCount < filteredAndSortedList.length) {
      setDisplayCount(filteredAndSortedList.length)
    }
  }

  const productsToDisplay = filteredAndSortedList.slice(0, displayCount)

  const isShowAllPossible = displayCount < filteredAndSortedList.length

  if (status === 'loading' || status === 'idle') {
    return <div className={styles.loading}>Загрузка всех товаров...</div>
  }

  if (status === 'failed') {
    return <div className={styles.error}>Ошибка при загрузке: {error}</div>
  }

  return (
    <div className={styles.pageContainer}>
      <div className={styles.breadcrumbs}>
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
        <span className={styles.separator}>&nbsp;</span>

        <span
          className={`${styles.currentCrumb} ${
            isShowAllPossible ? styles.clickableCrumb : ''
          }`}
          onClick={handleShowAllProducts}
        >
          All products
        </span>
      </div>

      <h1 className={styles.pageTitle}>All products</h1>

      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        discountedOnly={discountedOnly}
        setDiscountedOnly={setDiscountedOnly}
        sortType={sortType}
        setSortType={setSortType}
      />

      <div className={styles.productsGrid}>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className={styles.productLink}
            >
              <ProductCard
                id={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
                discont_price={product.discont_price}
              />
            </Link>
          ))
        ) : (
          <p className={styles.noProducts}>
            Товары, соответствующие фильтрам, не найдены.
          </p>
        )}
      </div>
    </div>
  )
}

export default AllProductsPage
