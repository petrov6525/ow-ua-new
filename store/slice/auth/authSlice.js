import {createSlice} from "@reduxjs/toolkit";
import asyncStorage from "@react-native-async-storage/async-storage/src/AsyncStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    // isAuth: true,
    isAuth: false,
    isRequest: false,
    registerEmail: "",
    accessToken: "",
    refreshToken: "",
}

const authSlice = createSlice({
    name: 'authState',
    initialState,
    reducers: {
        isLoggedIn: (state) => {
            return state.isAuth;
        },
        setIsAuth: (state, action) => {
            state.isAuth = action.payload;
        },
        setIsRequest: (state, action) => {
            state.isRequest = action.payload;
        },
        setRegisterEmail: (state, action) => {
            state.registerEmail = action.payload;
        },
        logout: (state) => {
            state.isAuth = false;
            state.accessToken = null;
        },
        setAccessToken: (state, action) => {
            state.accessToken = action.payload
        }
    }
})

export const {
    login,
    setIsAuth,
    setIsRequest,
    setRegisterEmail,
    logout,
    setAccessToken
} = authSlice.actions;
export default authSlice.reducer;