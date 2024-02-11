import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    isFullScreen: false,
    currentChannelTitle: '',
    currentPlayListTitle: '',
    uploadProgress: 0,
    isUploading: false,
    uploadVideoTitle: 'Без назви',
    showUploadStatus: false,
    uploadStatus: false,
    currentCategoryId: null
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
        },
        setCurrentPlayListTitle: (state, action) => {
            state.currentPlayListTitle = action.payload
        },
        setUploadProgress: (state, action) => {
            state.uploadProgress = action.payload
        },
        setIsUploading: (state, action) => {
            state.isUploading = action.payload
        },
        setUploadVideoTitle: (state, action) => {
            if (action.payload !== "") {
                state.uploadVideoTitle = action.payload
            }
        },
        setUploadStatus: (state, action) => {
            state.uploadStatus = action.payload
        },
        setShowUploadStatus: (state, action) => {
            state.showUploadStatus = action.payload
        },
        toggleCurrentCategoryId: (state, action) => {
            if (state.currentCategoryId === action.payload) {
                state.currentCategoryId = null
            } else {
                state.currentCategoryId = action.payload
            }
        }
    }
})

export const {
    setIsFullScreen,
    setCurrentChannelTitle,
    setCurrentPlayListTitle,
    setUploadProgress,
    setIsUploading,
    setUploadVideoTitle,
    setUploadStatus,
    setShowUploadStatus,
    toggleCurrentCategoryId,
} = videoSlice.actions;
export default videoSlice.reducer;