import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const baseUrl = "http://192.168.0.102:8085";
const loginUrl = "/api/auth/auth";


export const emailLogin = createAsyncThunk('authState/emailLogin', async (data, { dispatch }) => {
    try {
        const url = baseUrl + loginUrl;
        const response = await axios.post(url, data);

        console.log(response);

        if (response.data) {
            return true;
        }

    } catch (error) {
        if (error.message === 'Network Error') {
            console.warn("Перевірте з'єднання з інтернетом");
        } else {
            console.warn("Помилка авторизації");
        }
        console.log(error.message);
        return false;
    }
});
