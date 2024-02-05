import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    errors: [],
}

const modalSlice = createSlice({
    name: 'modalSlice',
    initialState,
    reducers: {
        addError: (state, action) => {
            state.errors.push(action.payload);
        },
        clearErrors: (state) => {
            state.errors = [];
        },

    }
})

export const {
    addError,
    clearErrors
} = modalSlice.actions;

export default modalSlice.reducer;