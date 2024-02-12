import {
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {BASE_URL} from './constants';
import AuthService from "../services/authService";

const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, {getState}) => {
        const {accessToken} = (getState()).authReducer;
        if (accessToken) {
            console.log("Token: ", accessToken);
            headers.set('Authorization', `Bearer ${accessToken}`);
        }

        return headers;
    },
});
export const customBaseQuery = async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result.error) {
        if (result.error.status === 401 || result.error.status === 403) {
            const authService = new AuthService(api.dispatch);
            // await authService.Logout();
        }
    }

    return result;
};
