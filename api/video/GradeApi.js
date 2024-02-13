import {createApi} from '@reduxjs/toolkit/query/react';
import {customBaseQuery} from "../base-query";
import {BASE_URL, ROUTES} from '../constants';

export const GradeApi = createApi({
            reducerPath: 'GradeApi',
            tagTypes: ['Comments', 'SubscribersVideos', 'SubscribersCount', 'LikedVideos'],
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
                }),
                isLiked: builder.query({
                    query: (videoId) => ROUTES.IS_LIKED + `?videoId=${videoId}`
                }),
                isDisLiked: builder.query({
                    query: (videoId) => ROUTES.IS_DISLIKED + `?videoId=${videoId}`
                }),
                sendLike: builder.mutation({
                    query: (like) => ({
                        url: ROUTES.SEND_LIKE,
                        method: 'POST',
                        body: like
                    }),
                    invalidatesTags: ['LikedVideos']
                }),
                sendDisLike: builder.mutation({
                    query: (like) => ({
                        url: ROUTES.SEND_DISLIKE,
                        method: 'POST',
                        body: like
                    }),
                    invalidatesTags: ['LikedVideos']
                }),
                isSubscribed: builder.query({
                    query: (targetUserId) => ROUTES.IS_SUBSCRIBED + `?targetUserId=${targetUserId}`
                }),
                toggleSubscribe: builder.mutation({
                    query: (data) => ({
                        url: ROUTES.TOGGLE_SUBSCRIPTION,
                        method: 'POST',
                        body: data
                    }),
                    invalidatesTags: ['SubscribersVideos', 'SubscribersCount']
                }),
                getLikedVideos: builder.query({
                    query: () => ROUTES.GET_LIKED_VIDEOS,
                    providesTags: ['LikedVideos']
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
    useIsLikedQuery,
    useIsDisLikedQuery,
    useSendLikeMutation,
    useSendDisLikeMutation,
    useIsSubscribedQuery,
    useToggleSubscribeMutation,
    useGetLikedVideosQuery,
} = GradeApi;
