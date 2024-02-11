import {createApi} from '@reduxjs/toolkit/query/react';
import {customBaseQuery} from "../base-query";
import {BASE_URL, ROUTES} from '../constants';

export const GradeApi = createApi({
            reducerPath: 'GradeApi',
            tagTypes: ['Comments'],
            baseQuery: customBaseQuery,
            endpoints: (builder) => ({
                getLikes: builder.query({
                    query: (videoId) => ROUTES.GET_LIKES + `?videoId=${videoId}`
                }),
                getDisLikes: builder.query({
                    query: (videoId) => ROUTES.GET_DISLIKES + `?videoId=${videoId}`
                }),
                getComments: builder.query({
                    query: (videoId) => ROUTES.GET_COMMENTS + `?videoId=${videoId}`,
                    providesTags: ['Comments']
                }),
                addComment: builder.mutation({
                    query: (comment) => ({
                        url: ROUTES.ADD_COMMENT,
                        body: comment,
                        method: 'POST'
                    }),
                    invalidatesTags: ['Comments']
                })
            }),
        }
    )
;

export const {
    useGetLikesQuery,
    useGetDisLikesQuery,
    useGetCommentsQuery,
    useAddCommentMutation,
} = GradeApi;
