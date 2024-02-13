import {createApi} from '@reduxjs/toolkit/query/react';
import {customBaseQuery} from "../base-query";
import {BASE_URL, ROUTES} from '../constants';

export const VideoApi = createApi({
            reducerPath: 'VideoApi',
            baseQuery: customBaseQuery,
            tagTypes: ['ViewsCount'],
            endpoints: (builder) => ({
                getAllCategories: builder.query({
                    query: () => ROUTES.CATEGORY_ALL
                }),
                getAcceptStatuses: builder.query({
                    query: () => ROUTES.ACCEPT_STATUSES
                }),
                getAllVideo: builder.query({
                    query: () => ROUTES.ALL_VIDEO,
                }),
                getAllUserVideo: builder.query({
                    query: (userId) => ROUTES.ALL_USER_VIDEO + `?userId=${userId}`
                }),
                getAllPlaylistVideo: builder.query({
                    query: (playlistId) => ROUTES.ALL_PLAYLIST_VIDEO + `?playlistId=${playlistId}`
                }),
                getVideo: builder.query({
                    query: (videoId) => ROUTES.GET_VIDEO + videoId,
                    invalidatesTags: ['ViewsCount']
                }),
                getViewsCount: builder.query({
                    query: (videoId) => ROUTES.GET_VIEWS + `?videoId=${videoId}`,
                    providesTags: ['ViewsCount']
                })
            }),
        }
    )
;

export const {
    useGetAllCategoriesQuery,
    useGetAcceptStatusesQuery,
    useGetVideoQuery,
    useGetAllVideoQuery,
    useGetAllUserVideoQuery,
    useGetViewsCountQuery,
    useGetAllPlaylistVideoQuery,
} = VideoApi;
