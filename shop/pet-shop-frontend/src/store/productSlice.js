// src/store/productSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api' // предполагается, что это axios instance, настроенный с baseURL

// ----------------------
// 1. Асинхронные Thunks
// ----------------------

// Thunk для получения всех товаров
export const fetchAllProducts = createAsyncThunk(
  'products/fetchAllProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products/all')
      return response.data
    } catch (error) {
      console.error(
        'Ошибка при получении всех товаров:',
        error.message || error
      )
      return rejectWithValue(
        error.message || 'Не удалось получить все товары (Network Error)'
      )
    }
  }
)

// Алиас для совместимости (если где-то в проекте вызывался fetchProducts)
export const fetchProducts = fetchAllProducts

// Thunk для получения товаров со скидкой
export const fetchSaleProducts = createAsyncThunk(
  'products/fetchSaleProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products/sale')
      return response.data
    } catch (error) {
      console.error(
        'Ошибка при получении товаров со скидкой:',
        error.message || error
      )
      return rejectWithValue(
        error.message || 'Неизвестная ошибка при загрузке акционных товаров'
      )
    }
  }
)

// Thunk для получения товаров по ID категории
export const fetchProductsByCategory = createAsyncThunk(
  'products/fetchProductsByCategory',
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/categories/${categoryId}`)
      // Ожидаем, что бек вернёт { data: [...], category: {...} } или просто массив
      return response.data
    } catch (error) {
      console.error(
        `Ошибка при получении продуктов категории ${categoryId}:`,
        error.message || error
      )
      return rejectWithValue(
        error.message ||
          `Не удалось загрузить продукты для категории ${categoryId}`
      )
    }
  }
)

// ----------------------
// 2. Инициализация состояния (Slice)
// ----------------------
const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [], // все товары
    saleList: [], // товары со скидкой
    categoryProducts: [],

    status: 'idle',
    saleStatus: 'idle',
    categoryStatus: 'idle',

    error: null,
    saleError: null,
    categoryError: null,
  },
  reducers: {
    clearCategoryProducts: (state) => {
      state.categoryProducts = []
      state.categoryStatus = 'idle'
      state.categoryError = null
    },
  },
  extraReducers: (builder) => {
    builder
      // --- fetchAllProducts ---
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = Array.isArray(action.payload) ? action.payload : []
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error?.message || 'Unknown error'
      })

      // --- fetchSaleProducts ---
      .addCase(fetchSaleProducts.pending, (state) => {
        state.saleStatus = 'loading'
        state.saleError = null
      })
      .addCase(fetchSaleProducts.fulfilled, (state, action) => {
        state.saleStatus = 'succeeded'
        state.saleList = Array.isArray(action.payload) ? action.payload : []
        if (!Array.isArray(action.payload)) {
          console.warn(
            'Сервер вернул не-массив для акционных товаров. Отображаем пустую сетку.'
          )
        }
      })
      .addCase(fetchSaleProducts.rejected, (state, action) => {
        state.saleStatus = 'failed'
        state.saleError =
          action.payload || action.error?.message || 'Unknown error'
      })

      // --- fetchProductsByCategory ---
      .addCase(fetchProductsByCategory.pending, (state) => {
        state.categoryStatus = 'loading'
        state.categoryError = null
      })
      .addCase(fetchProductsByCategory.fulfilled, (state, action) => {
        state.categoryStatus = 'succeeded'
        // Если backend вернул объект { data: [...] }, используем data, иначе — payload напрямую
        const payload = action.payload || {}
        state.categoryProducts = Array.isArray(payload.data)
          ? payload.data
          : Array.isArray(payload)
          ? payload
          : []
      })
      .addCase(fetchProductsByCategory.rejected, (state, action) => {
        state.categoryStatus = 'failed'
        state.categoryError =
          action.payload || action.error?.message || 'Unknown error'
      })
  },
})

// ----------------------
// 3. Экшены и Селекторы
// ----------------------
export const { clearCategoryProducts } = productSlice.actions
export default productSlice.reducer

// Селекторы
export const selectAllProducts = (state) => state.products.list
export const selectAllProductsStatus = (state) => state.products.status
export const selectAllProductsError = (state) => state.products.error

export const selectSaleProducts = (state) => state.products.saleList
export const selectSaleStatus = (state) => state.products.saleStatus
export const selectSaleError = (state) => state.products.saleError

export const selectCategoryProducts = (state) => state.products.categoryProducts
export const selectCategoryProductsStatus = (state) =>
  state.products.categoryStatus
export const selectCategoryProductsError = (state) =>
  state.products.categoryError
