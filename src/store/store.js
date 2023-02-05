import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './reducers/productsSlice'

export default configureStore({
  reducer:{
    products: productsSlice
  }
})