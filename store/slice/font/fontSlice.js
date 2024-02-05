import {createSlice} from "@reduxjs/toolkit";
import {useFonts} from "expo-font";

const initialState = {
    isLoaded: false
}

const fontSlice = createSlice({
    name: "fontLoad",
    initialState,
    reducers: {
        setLoad: (state, action) => {
            state.isLoaded = action.payload;
        }
    }
})

export const {setLoad} = fontSlice.actions;
export default fontSlice.reducer;