import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Импорт страниц
import HomePage from './pages/HomePage/HomePage'
import CategoriesPage from './pages/CategoriesPage/CategoriesPage'
import CategoryProductsPage from './pages/CategoryProductsPage/CategoryProductsPage'

// 🌟 НОВЫЙ ИМПОРТ: Страница всех продуктов
import AllProductsPage from './pages/AllProductsPage/AllProductsPage'

// 🌟 НОВЫЙ ИМПОРТ: Страница всех продуктов со скидкой
import DiscountedProductsPage from './pages/DiscountedProductsPage/DiscountedProductsPage'

// ⭐ ДОБАВЛЕНИЕ: Импорт компонента страницы продукта
import ProductPage from './pages/ProductPage/ProductPage'

// ⭐ НОВЫЙ ИМПОРТ: Страница корзины
import CartPage from './pages/CartPage/CartPage'

// ⚠️ ДОБАВИТЬ: Импорт компонента страницы 404
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

// Импорт Layouts
import MainLayout from './layouts/MainLayout/MainLayout'

import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />

          <Route path="categories" element={<CategoriesPage />} />

          {/* Маршрут для страницы продуктов конкретной категории */}
          <Route path="categories/:id" element={<CategoryProductsPage />} />

          {/* 🌟 МАРШРУТ: Страница всех продуктов */}
          <Route path="products" element={<AllProductsPage />} />

          {/* 🌟 МАРШРУТ: Страница всех продуктов со скидкой */}
          <Route path="sales" element={<DiscountedProductsPage />} />

          {/* ⭐ МАРШРУТ: Страница конкретного продукта */}
          <Route path="products/:id" element={<ProductPage />} />

          {/* ⭐ НОВЫЙ МАРШРУТ: Страница корзины */}
          <Route path="cart" element={<CartPage />} />

          {/* ⚠️ ИЗМЕНИТЬ: Заменяем заглушку на импортированный компонент NotFoundPage */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
