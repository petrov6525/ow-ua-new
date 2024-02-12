import {createApi} from "@reduxjs/toolkit/query/react";
import {customBaseQuery} from "../base-query";
import {ROUTES} from "../constants";


export const PlaylistApi = createApi({
    reducerPath: 'PlaylistApi',
    baseQuery: customBaseQuery,
    tagTypes: ['Playlists'],
    endpoints: (builder) => ({
        createPlaylist: builder.mutation({
            query: (data) => ({
                url: ROUTES.CREATE_PLAYLIST,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Playlists']
        }),
        getAllPlaylists: builder.query({
            query: () => ROUTES.ALL_PLAYLISTS,
            providesTags: ['Playlists']
        }),
        getAllPlaylistsForVideo: builder.query({
            query: (videoId) => ROUTES.ALL_PLAYLISTS_FOR_VIDEO + `?videoId=${videoId}`,
            providesTags: ['Playlists']
        }),
        addVideoToPlaylist: builder.mutation({
            query: (data) => ({
                url: ROUTES.ADD_VIDEO_TO_PLAYLIST,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {
    useCreatePlaylistMutation,
    useGetAllPlaylistsQuery,
    useGetAllPlaylistsForVideoQuery,
    useAddVideoToPlaylistMutation,
} = PlaylistApi;