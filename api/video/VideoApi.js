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
    useGetViewsCountQuery,
} = VideoApi;
