import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    navigation: "Main"
}

const mainNavigateSlice = createSlice({
    name: "mainNavigateSlice",
    initialState,
    reducers: {
        setNavigation: (state, action)=> {
            state.navigation = action.payload;
        }
    }
})

export const {setNavigation} = mainNavigateSlice.actions;

export default mainNavigateSlice.reducer;