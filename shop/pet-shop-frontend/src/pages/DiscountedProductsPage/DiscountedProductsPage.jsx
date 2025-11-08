import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from './DiscountedProductsPage.module.css'

// Импорт Redux Thunk и Селекторов
import {
  fetchAllProducts,
  selectAllProducts,
  selectAllProductsStatus,
  selectAllProductsError,
} from '../../store/productSlice'

// Импорт компонентов
import ProductCard from '../../components/ProductCard/ProductCard'
import Filters from '../../components/Filters/Filters'

// --- КОНСТАНТА: Количество карточек для отображения по умолчанию ---
const INITIAL_DISPLAY_COUNT = 8

const DiscountedProductsPage = () => {
  const dispatch = useDispatch()

  // Получаем данные из Redux Store
  const allProducts = useSelector(selectAllProducts)
  const status = useSelector(selectAllProductsStatus)
  const error = useSelector(selectAllProductsError)

  // Состояния для фильтрации и сортировки
  const [priceRange, setPriceRange] = useState({ from: '', to: '' })
  //  По умолчанию: discountedOnly установлен в true
  const [discountedOnly, setDiscountedOnly] = useState(true)
  const [sortType, setSortType] = useState('default')
  const [filteredAndSortedList, setFilteredAndSortedList] = useState([])

  //  Состояние: Количество отображаемых карточек. Изначально 8.
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)

  // 1. Загрузка данных при первом рендере
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllProducts())
    }
  }, [status, dispatch])

  // 2. Логика фильтрации и сортировки
  useEffect(() => {
    let list = [...allProducts]

    // 2.1. Фильтрация по скидке (ВСЕГДА ПРИМЕНЯЕТСЯ)
    //  Фильтрация происходит, только если discountedOnly = true
    if (discountedOnly) {
      list = list.filter((p) => p.discont_price)
    }

    // 2.2. Фильтрация по цене
    const priceFrom = parseFloat(priceRange.from)
    const priceTo = parseFloat(priceRange.to)

    if (!isNaN(priceFrom)) {
      list = list.filter((p) => (p.discont_price || p.price) >= priceFrom)
    }
    if (!isNaN(priceTo)) {
      list = list.filter((p) => (p.discont_price || p.price) <= priceTo)
    }

    // 2.3. Сортировка
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

    //  Сброс счетчика отображения, чтобы снова показать только 8 карточек при изменении фильтров
    setDisplayCount(INITIAL_DISPLAY_COUNT)
  }, [allProducts, discountedOnly, priceRange, sortType])

  // --- Функция для показа всех карточек (по клику на Breadcrumb) ---
  const handleShowAllProducts = () => {
    //  Вызываем, только если displayCount меньше общего количества отфильтрованных товаров
    if (displayCount < filteredAndSortedList.length) {
      setDisplayCount(filteredAndSortedList.length)
    }
  }

  // --- ОБРЕЗАЕМ СПИСОК ДЛЯ ОТОБРАЖЕНИЯ ---
  //  Используем .slice для ограничения списка до displayCount
  const productsToDisplay = filteredAndSortedList.slice(0, displayCount)

  // --- Проверка, нужно ли делать кнопку "Discounted items" кликабельной ---
  const isShowAllPossible = displayCount < filteredAndSortedList.length

  // --- Обработка статусов ---
  if (status === 'loading' || status === 'idle') {
    return <div className={styles.loading}>Загрузка товаров со скидкой...</div>
  }

  if (status === 'failed') {
    return <div className={styles.error}>Ошибка при загрузке: {error}</div>
  }

  // --- Рендеринг ---
  return (
    <div className={styles.pageContainer}>
      {/* 🌟 Маршрут пользователя (Breadcrumbs) */}
      <div className={styles.breadcrumbs}>
        <Link to="/" className={styles.breadcrumbLink}>
          Main page
        </Link>
        <span className={styles.separator}>&nbsp;</span>
        {/* Добавляем onClick и класс для кликабельности */}
        <span
          className={`${styles.currentCrumb} ${
            isShowAllPossible ? styles.clickableCrumb : ''
          }`}
          onClick={handleShowAllProducts}
        >
          All sales
        </span>
      </div>

      <h1 className={styles.pageTitle}>All sales</h1>

      {/*  Компонент фильтров */}
      <Filters
        priceRange={priceRange}
        setPriceRange={setPriceRange}
        // Передаем discountedOnly, но изначально он true
        discountedOnly={discountedOnly}
        setDiscountedOnly={setDiscountedOnly}
        sortType={sortType}
        setSortType={setSortType}
      />

      {/* Сетка товаров */}
      <div className={styles.productsGrid}>
        {productsToDisplay.length > 0 ? (
          productsToDisplay.map((product) => (
            // Проверяем наличие скидки перед рендерингом, хотя основная фильтрация уже была
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
            Товары со скидкой, соответствующие фильтрам, не найдены.
          </p>
        )}
      </div>
    </div>
  )
}

export default DiscountedProductsPage
