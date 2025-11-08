import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

// Redux Thunks и селекторы
import {
  fetchAllCategories,
  selectAllCategories,
  selectCategoriesStatus,
  selectCategoriesError,
} from '../../store/categorySlice'
import {
  fetchSaleProducts,
  selectSaleProducts,
  selectSaleStatus,
  selectSaleError,
} from '../../store/productSlice'

// Компоненты
import PromoSection from '../../components/PromoSection/PromoSection.jsx'
import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx'
import DiscountFormSection from '../../components/DiscountFormSection/DiscountFormSection.jsx'
import SaleSection from '../../components/SaleSection/SaleSection.jsx'

import styles from './HomePage.module.css'

const HomePage = () => {
  const dispatch = useDispatch()

  // Данные категорий
  const categories = useSelector(selectAllCategories)
  const categoryStatus = useSelector(selectCategoriesStatus)
  const categoryError = useSelector(selectCategoriesError)

  // Данные товаров со скидкой
  const saleProducts = useSelector(selectSaleProducts)
  const saleStatus = useSelector(selectSaleStatus)
  const saleError = useSelector(selectSaleError)

  // Загрузка данных при монтировании
  useEffect(() => {
    if (categoryStatus === 'idle') dispatch(fetchAllCategories())
    if (saleStatus === 'idle') dispatch(fetchSaleProducts())
  }, [categoryStatus, saleStatus, dispatch])

  // Отображение категорий (4 карточки)
  const renderCategories = () => {
    const categoriesToShow = categories.slice(0, 4)

    if (categoryStatus === 'loading' || categoryStatus === 'idle')
      return <p>Загрузка категорий...</p>
    if (categoryStatus === 'failed') return <p>Ошибка: {categoryError}</p>
    if (categoriesToShow.length === 0) return <p>Категории не найдены</p>

    return (
      <div className={styles.grid}>
        {categoriesToShow.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            <CategoryCard
              id={category.id}
              title={category.title}
              image={category.image}
            />
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.homePage}>
      {/* 1. Баннер промо */}
      <PromoSection />

      {/* 2. Секция категорий */}
      <section className={styles.categorySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Categories</h2>
          <span className={styles.line}></span>
          <Link to="/categories" className={styles.viewAllButton}>
            All categories
          </Link>
        </div>
        {renderCategories()}
      </section>

      {/* 3. Секция скидки на первый заказ */}
      <DiscountFormSection />

      {/* 4. Секция товаров со скидкой (Sale) */}
      <SaleSection
        products={saleProducts} // товары из Redux
        status={saleStatus} // статус загрузки
        error={saleError} // ошибка, если есть
      />
    </div>
  )
}

export default HomePage
