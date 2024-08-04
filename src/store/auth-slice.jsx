import { createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
   name:"authentication",
   initialState:{},
   reducers:{}  
})

export const authActions = authSlice.actions;
export default authSlice;