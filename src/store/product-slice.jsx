import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
   name:"product",
   initialState:{
    products:[],
    totalQuantity:0
   },
   reducers:{
    allProducts(state,action) {
     state.totalQuantity = action.payload.totalQuantity;
     state.products = action.payload.products;
    }
   }  
})

export const productActions = productSlice.actions;
export default productSlice;