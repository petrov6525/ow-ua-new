import * as React from 'react';
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SubscribeMini} from "../subscribes/components/SubscribeMini";
import {Playlist} from "./components/Playlist";
import {useEffect} from "react";



const playList = {
    title: 'Playlist Title',
    videoCount: 22,
    status: 'private'
}

export default function Playlists() {
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути плейлісти"} />
        )
    }
    

    return (
        <MainLayout>
            <FontLoader>
                <SafeAreaView style={{paddingBottom: 65, width: '100%'}}>
                    <ScrollView
                        style={{height: '100%'}}
                        scrollEventThrottle={5}
                    >
                        <Playlist playlist={1} />
                        <Playlist playlist={2} />
                        <Playlist playlist={3} />
                        <Playlist playlist={4} />
                        <Playlist playlist={5} />
                        <Playlist playlist={6} />
                        <Playlist playlist={7} />
                        <Playlist playlist={8} />
                        <Playlist playlist={9} />
                        <Playlist playlist={10} />
                    </ScrollView>
                    <View>

                    </View>
                </SafeAreaView>
            </FontLoader>
        </MainLayout>
    )
}