import * as React from 'react';
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {SafeAreaView, ScrollView, Text} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SubscribeMini} from "../subscribes/components/SubscribeMini";
import {Playlist} from "./components/Playlist";



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
                <SafeAreaView style={{paddingBottom: 75, width: '100%'}}>
                    <ScrollView
                        style={{margin: 20}}
                        scrollEventThrottle={5}
                    >
                        <Playlist playlist={playList} />
                    </ScrollView>
                </SafeAreaView>
            </FontLoader>
        </MainLayout>
    )
}