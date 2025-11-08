import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

import ProductCard from '../../components/ProductCard/ProductCard.jsx'
import FilterBar from '../../components/FilterBar/FilterBar.jsx'

//   импорт Redux-функций из productSlice.js
import {
  fetchProductsByCategory,
  selectCategoryProducts,
  selectCategoryProductsStatus,
  selectCategoryProductsError,
  clearCategoryProducts,
} from '../../store/productSlice'

import { selectCategoryById } from '../../store/categorySlice'

import styles from './CategoryProductsPage.module.css'

const CategoryProductsPage = () => {
  const { id } = useParams()
  const categoryId = parseInt(id)
  const dispatch = useDispatch()

  // 1. Получение данных из Redux store
  const products = useSelector(selectCategoryProducts)
  const status = useSelector(selectCategoryProductsStatus)
  const error = useSelector(selectCategoryProductsError)

  // Получаем название категории (Dry & Wet Food)
  const category = useSelector((state) => selectCategoryById(state, categoryId))
  // Если категория не найдена, используем заглушку, чтобы теги не были пустыми
  const categoryTitle = category ? category.title : 'Dry & Wet Food'

  const [filter, setFilter] = useState({
    priceFrom: '',
    priceTo: '',
    discountedOnly: false,
    sortBy: 'default',
  })

  // 2. Загрузка продуктов при изменении ID
  useEffect(() => {
    if (categoryId) {
      // Если категорияTitle пуста (не найдена), мы можем временно использовать заглушку
      // Но Redux должен найти ее после загрузки.
      dispatch(fetchProductsByCategory(categoryId))
    }

    return () => {
      // Очистка состояния при уходе со страницы
      dispatch(clearCategoryProducts())
    }
  }, [dispatch, categoryId])

  // 3. Логика фильтрации
  const handleFilterChange = (newFilter) => {
    setFilter((prev) => ({ ...prev, ...newFilter }))
  }

  const filteredProducts = products
    .filter((product) => {
      const price = product.discont_price || product.price
      const from = filter.priceFrom ? parseFloat(filter.priceFrom) : 0
      const to = filter.priceTo ? parseFloat(filter.priceTo) : Infinity

      if (price < from || price > to) return false
      if (filter.discountedOnly && !product.discont_price) return false

      return true
    })
    .sort((a, b) => {
      const priceA = a.discont_price || a.price
      const priceB = b.discont_price || b.price

      switch (filter.sortBy) {
        case 'new':
          return b.id - a.id
        case 'price_asc':
          return priceA - priceB
        case 'price_desc':
          return priceB - priceA
        default:
          return 0
      }
    })

  // 4. Отображение статуса загрузки/ошибки
  if (status === 'loading' || status === 'idle') {
    return (
      <main className={styles.container}>
        {/* Даже при загрузке мы рендерим шапку, чтобы избежать пустых мест */}

        {/* Хлебные крошки (теги) */}
        <div className={styles.breadcrumbsContainer}>
          <Link to="/" className={styles.breadcrumbLink}>
            Main page
          </Link>
          <Link to="/categories" className={styles.breadcrumbLink}>
            Categories
          </Link>
          <span className={styles.breadcrumbCurrent}>Loading...</span>
        </div>

        <h1 className={styles.pageTitle}>Loading...</h1>

        <p className={styles.status}>Загрузка продуктов...</p>
      </main>
    )
  }

  if (status === 'failed') {
    return (
      <main className={styles.container}>
        <p className={styles.statusError}>Ошибка: {error}</p>
      </main>
    )
  }

  // 5. Основной рендеринг
  return (
    <main className={styles.container}>
      {/* Хлебные крошки (теги) */}
      <div className={styles.breadcrumbsContainer}>
        {/* Кнопка 1: Main page */}
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
        {/* Кнопка 2: Categories */}
        <Link to="/categories" className={styles.breadcrumbLink}>
          Categories
        </Link>
        {/* Кнопка 3: Dry & Wet Food (Активная) */}
        <span className={styles.breadcrumbCurrent}>{categoryTitle}</span>
      </div>

      {/*  ЗАГОЛОВОК СТРАНИЦЫ */}
      <h1 className={styles.pageTitle}>{categoryTitle}</h1>

      {/* Панель фильтров */}
      <FilterBar filter={filter} onFilterChange={handleFilterChange} />

      {/* Сетка продуктов */}
      {filteredProducts.length > 0 ? (
        <div className={styles.productsGrid}>
          {filteredProducts.map((product) => (
            //  КРИТИЧЕСКОЕ ИСПРАВЛЕНИЕ: Оборачиваем ProductCard в Link
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
          ))}
        </div>
      ) : (
        <p className={styles.status}>
          Продукты по заданным фильтрам не найдены.
        </p>
      )}
    </main>
  )
}

export default CategoryProductsPage
