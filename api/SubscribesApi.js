import {createApi} from '@reduxjs/toolkit/query/react';
import {customBaseQuery} from "./base-query";
import {ROUTES} from "./constants";

export const SubscribesApi = createApi({
            reducerPath: 'SubscribesApi',
            tagTypes: ['Subscribes', 'SubscribersVideos', 'SubscribersCount'],
            baseQuery: customBaseQuery,
            endpoints: (builder) => ({
                getAllSubscribes: builder.query({
                    query: () => ROUTES.ALL_SUBSCRIBES,
                    providesTags: ['Subscribes'],
                }),
                getSubscribersVideos: builder.query ({
                    query: () => ROUTES.SUBSCRIBERS_VIDEOS,
                    providesTags: ['SubscribersVideos']
                }),
                getSubscribersCount: builder.query({
                    query: (userId) => ROUTES.SUBSCRIBERS_COUNT + `?userId=${userId}`,
                    providesTags: ['SubscribersCount'],
                    keepUnusedDataFor: 1
                }),
                getVideoCount: builder.query({
                    query: (userId) => ROUTES.VIDEO_COUNT + `?userId=${userId}`
                })
            }),
        }
    )
;

export const {
    useGetAllSubscribesQuery,
    useGetSubscribersVideosQuery,
    useGetSubscribersCountQuery,
    useGetVideoCountQuery,
} = SubscribesApi;
