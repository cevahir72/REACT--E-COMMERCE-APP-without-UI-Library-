import { createSlice } from '@reduxjs/toolkit';
import productsApi from "../helpers/products.json"



export const productSlice = createSlice({
    name:"product",
    initialState:{
        products:productsApi,
    }
    
})
//planned , but - never used


export default productSlice.reducer