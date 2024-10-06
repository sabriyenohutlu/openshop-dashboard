import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    initialState:{mode:"light"},
    reducers:{
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // Boş string yerine light-dark döngüsü
          },
        setMode : (state, action) => {
           state.mode = action.payload; 
        }
    }
})

export const themeActions = themeSlice.actions;
export default themeSlice;
