import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isFullScreen: false
}

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {
        setIsFullScreen: (state, action) => {
            state.isFullScreen = action.payload
        }
    }
})

export const { setIsFullScreen } = videoSlice.actions;
export default videoSlice.reducer;