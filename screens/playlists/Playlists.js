import * as React from 'react';
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    StyleSheet
} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SubscribeMini} from "../subscribes/components/SubscribeMini";
import {Playlist} from "./components/Playlist";
import {useEffect, useMemo} from "react";
import {useGetAllPlaylistsQuery} from "../../api/video/PlaylistApi";
import asyncStorageService from "../../services/asyncStorageService";
import {useNavigation} from "@react-navigation/native";
import MaterialCommunityIcon from "react-native-paper/src/components/MaterialCommunityIcon";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export default function Playlists() {
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const {data, isLoading, error, refetch} = useGetAllPlaylistsQuery();
    const playlists = useMemo(() => {
        return data ?? []
    }, [data]);
    const navigation = useNavigation();


    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути плейлісти"}/>
        )
    }


    return (
        <MainLayout>
            <FontLoader>
                <SafeAreaView style={{paddingBottom: 65, width: '100%'}}>
                    {isLoading && <ActivityIndicator size={"large"}/>}
                    <FlatList
                        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()}/>}
                        data={data}
                        refreshing={true}
                        renderItem={({item}) => (<Playlist playlist={item}/>)}
                    />
                    <TouchableOpacity
                        style={styles.add}
                        onPress={() => navigation.navigate('AddPlaylistPage')}>
                        <MaterialCommunityIcons name="playlist-plus" color={'rgba(255,255,255,0.8)'} size={30}/>
                    </TouchableOpacity>
                </SafeAreaView>
            </FontLoader>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    add: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: 'rgba(90,88,201,0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})