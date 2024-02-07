import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isFullScreen: false,
    currentChannelTitle: ''
}

const videoSlice = createSlice({
    name: 'videoSlice',
    initialState,
    reducers: {
        setIsFullScreen: (state, action) => {
            state.isFullScreen = action.payload
        },
        setCurrentChannelTitle: (state, action) => {
            state.currentChannelTitle = action.payload
        }
    }
})

export const { setIsFullScreen, setCurrentChannelTitle } = videoSlice.actions;
export default videoSlice.reducer;