// src/store/cartSlice.js

import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    // ... (addToCart остается прежним или обновляется, чтобы избежать дублирования)
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      )
      if (existingItem) {
        // Если товар уже есть, добавляем количество
        existingItem.quantity += action.payload.quantity
      } else {
        // Если товара нет, добавляем как новый
        state.items.push(action.payload)
      }
    },
    // Увеличение количества
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item) {
        item.quantity++
      }
    },
    // Уменьшение количества (и удаление, если стало 0)
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
      } else if (item && item.quantity === 1) {
        // Удаляем товар, если количество становится 1 при декременте
        state.items = state.items.filter((item) => item.id !== action.payload)
      }
    },
    // Удаление товара полностью
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    // Очистка корзины после успешного заказа
    clearCart: (state) => {
      state.items = []
    },
  },
})

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = cartSlice.actions
export default cartSlice.reducer
