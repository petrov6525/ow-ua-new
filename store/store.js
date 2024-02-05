import {configureStore} from "@reduxjs/toolkit";
import fontReducer from "../store/slice/font/fontSlice"
import authReducer from "../store/slice/auth/authSlice";
import modalReducer from "../store/slice/modal/modalSlice";
import mainNavigateReducer from "./slice/navigate/mainNavigateSlice";

export const store = configureStore({
    reducer: {
        fontReducer: fontReducer,
        authReducer: authReducer,
        modalReducer: modalReducer,
        mainNavigateReducer: mainNavigateReducer
    }
})

export default {store};