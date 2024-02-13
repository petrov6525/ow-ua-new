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
        editPlaylist: builder.mutation({
            query: (data) => ({
                url: ROUTES.EDIT_PLAYLIST,
                method: 'POST',
                body: data
            }),
            invalidatesTags: ['Playlists']
        }),
        deletePlaylist: builder.mutation({
           query: (playlist) => ({
               url: ROUTES.PLAYLIST,
               method: 'DELETE',
               body: playlist
           }),
            invalidatesTags: ['Playlists']
        }),
        getAllPlaylists: builder.query({
            query: () => ROUTES.ALL_PLAYLISTS,
            providesTags: ['Playlists'],
            keepUnusedDataFor: 1
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
            }),
            invalidatesTags: ['Playlists']
        })
    })
})

export const {
    useCreatePlaylistMutation,
    useEditPlaylistMutation,
    useGetAllPlaylistsQuery,
    useGetAllPlaylistsForVideoQuery,
    useAddVideoToPlaylistMutation,
    useDeletePlaylistMutation,
} = PlaylistApi;