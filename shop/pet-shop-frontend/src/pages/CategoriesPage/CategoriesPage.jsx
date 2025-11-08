import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import CategoryCard from '../../components/CategoryCard/CategoryCard.jsx'

// Импорт Redux Thunks и селекторов
import {
  fetchAllCategories,
  selectAllCategories,
  selectCategoriesStatus,
  selectCategoriesError,
} from '../../store/categorySlice'

// Путь к стилям должен быть относительным, так как файл находится в той же папке
import styles from './CategoriesPage.module.css'

const CategoriesPage = () => {
  const dispatch = useDispatch()

  // Получение данных и статусов из Redux Store
  const categories = useSelector(selectAllCategories)
  const status = useSelector(selectCategoriesStatus)
  const error = useSelector(selectCategoriesError)

  // Получение данных при монтировании

  useEffect(() => {
    // Запускаем Thunk, только если данные еще не загружены ('idle')
    if (status === 'idle') {
      dispatch(fetchAllCategories())
    }
  }, [dispatch, status])

  // Логика отображения статуса загрузки/ошибки

  // 1. Отображение загрузки
  if (status === 'loading' || status === 'idle') {
    return (
      <main className={styles.container}>
        <p className={styles.status}>Загрузка категорий...</p>
      </main>
    )
  }

  // 2. Отображение ошибки
  if (status === 'failed') {
    return (
      <main className={styles.container}>
        <p className={styles.statusError}>
          Ошибка загрузки: {error || 'Не удалось получить категории.'}
        </p>
      </main>
    )
  }

  // Основной рендеринг страницы

  return (
    <main className={styles.container}>
      {/*  ОТОБРАЖЕНИЕ ТЕКУЩЕГО МАРШРУТА (ХЛЕБНЫЕ КРОШКИ) */}
      <div className={styles.breadcrumbsContainer}>
        <Link to="/" className={styles.breadcrumbButton}>
          Main page
        </Link>
        {/* СЕРЫЙ РАЗДЕЛИТЕЛЬ */}
        <span className={styles.breadcrumbLine}></span>

        <span className={styles.breadcrumbCurrentButton}>Categories</span>
      </div>

      <h1 className={styles.pageTitle}>Categories</h1>

      {/* Проверка на пустой список */}
      {categories.length === 0 && <p>Категории не найдены.</p>}

      {/* Сетка категорий */}
      <div className={styles.categoriesGrid}>
        {categories.map((category) => (
          <Link
            // Ссылка на страницу товаров категории, например: /categories/1
            to={`/categories/${category.id}`}
            key={category.id}
            className={styles.categoryLink}
          >
            {/*  Примечание: Убедитесь, что CategoryCard принимает такие пропсы */}
            <CategoryCard
              id={category.id}
              title={category.title}
              image={category.image}
            />
          </Link>
        ))}
      </div>
    </main>
  )
}

export default CategoriesPage
