import {configureStore} from "@reduxjs/toolkit";
import fontReducer from "../store/slice/font/fontSlice"
import authReducer from "../store/slice/auth/authSlice";
import modalReducer from "../store/slice/modal/modalSlice";
import mainNavigateReducer from "./slice/navigate/mainNavigateSlice";
import videoReducer from "./slice/videoSlice";
import {VideoApi} from "../api/video/VideoApi";
import { setupListeners } from '@reduxjs/toolkit/query';
import {GradeApi} from "../api/video/GradeApi";
import {PlaylistApi} from "../api/video/PlaylistApi";
import {SubscribesApi} from "../api/SubscribesApi";

export const store = configureStore({
    reducer: {
        fontReducer: fontReducer,
        authReducer: authReducer,
        modalReducer: modalReducer,
        mainNavigateReducer: mainNavigateReducer,
        videoReducer: videoReducer,
        [VideoApi.reducerPath]: VideoApi.reducer,
        [GradeApi.reducerPath]: GradeApi.reducer,
        [PlaylistApi.reducerPath]: PlaylistApi.reducer,
        [SubscribesApi.reducerPath]: SubscribesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(VideoApi.middleware)
            .concat(GradeApi.middleware)
            .concat(PlaylistApi.middleware)
            .concat(SubscribesApi.middleware)
});

setupListeners(store.dispatch);

export default {store};