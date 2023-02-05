import { createSlice } from "@reduxjs/toolkit";
import {addProduct, saveProduct} from '../controllers/productController'

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    add: (state, action)=>addProduct(state, action),
    save: (state)=>saveProduct(state)
  }
})

export const {add, save } = productsSlice.actions

export default productsSlice.reducer