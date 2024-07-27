import { createSlice} from "@reduxjs/toolkit"

const productSlice = createSlice({
   name:"product",
   initialState:{},
   reducers:{}  
})

export const authActions = productSlice.actions;
export default productSlice;