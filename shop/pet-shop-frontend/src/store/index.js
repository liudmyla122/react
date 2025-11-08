// src/store/index.js (или store.js)

import { configureStore } from '@reduxjs/toolkit'
import productReducer from './productSlice.js' // <-- Этот путь и название редьюсера критически важны
import categoryReducer from './categorySlice.js'
import cartReducer from './cartSlice.js'

const store = configureStore({
  reducer: {
    // УБЕДИТЕСЬ, ЧТО ЭТО ПРАВИЛЬНО
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
})

export default store
