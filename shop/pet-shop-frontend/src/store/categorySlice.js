// src/store/categorySlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../api'

// ... (код Thunk fetchAllCategories остается прежним)
export const fetchAllCategories = createAsyncThunk(
  'categories/fetchAllCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/categories/all')
      return response.data
    } catch (error) {
      console.error('Ошибка при получении категорий:', error.message)
      return rejectWithValue(
        error.response?.data || 'Не удалось получить категории'
      )
    }
  }
)

// ... (код slice и extraReducers остается прежним)
const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    //
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCategories.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchAllCategories.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.list = action.payload
      })
      .addCase(fetchAllCategories.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload || action.error.message
      })
  },
})

export default categorySlice.reducer

// ----------------------
// 4. Селекторы (ИСПРАВЛЕННЫЕ ИМЕНА)
// ----------------------
export const selectAllCategories = (state) => state.categories.list
// ✅ ИСПРАВЛЕНИЕ: Используем множественное число для статуса и ошибки
export const selectCategoriesStatus = (state) => state.categories.status
export const selectCategoriesError = (state) => state.categories.error
export const selectCategoryById = (state, id) =>
  state.categories.list.find((cat) => cat.id === id)
