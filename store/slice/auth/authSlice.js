import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuth: true,
    isRequest: false,
    registerEmail: ""
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
        }
    }
})

export const {
    login,
    setIsAuth,
    setIsRequest,
    setRegisterEmail
} = authSlice.actions;
export default authSlice.reducer;