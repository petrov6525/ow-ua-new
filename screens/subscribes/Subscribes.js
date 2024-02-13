import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {FlatList, Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SubscribeMini} from "./components/SubscribeMini";
import {LogoCenter} from "../components/LogoCenter";
import {SubscribesHorizontal} from "./components/SubscribesHorisontal";
import {SubscribersVideos} from "./components/SubscribersVideos";
import {useGetAllSubscribesQuery, useGetSubscribersVideosQuery} from "../../api/SubscribesApi";
import {VideoComponent} from "../home/components/VideoComponent";


const Header = ({data}) => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 20, paddingBottom: 20, backgroundColor: "#0C0F14", flex: 1}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
                <LogoCenter/>
                <TouchableOpacity onPress={()=> navigation.navigate('AllSubscribes')}>
                    <Text style={fontStyles.noirProMedium}>All</Text>
                </TouchableOpacity>
            </View>

            <SubscribesHorizontal data={data}/>
        </View>
    )
}

export default function Subscribes() {
    const navigation = useNavigation();
    const {data, isLoading, error, refetch} = useGetAllSubscribesQuery();
    const {data: videosData, refetch:videosRefetch, isLoading: videosIsLoading} = useGetSubscribersVideosQuery();
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    useEffect(() => {
        const init = navigation.addListener('focus', fetch);

        return () => {
            // init.remove();
        };
    }, [fetch]);

    const fetch = async () => {
        refetch();
        videosRefetch();
    }


    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути підписки"}/>
        )
    }

    return (
        <MainLayout>
            <FontLoader>
               <FlatList
                   data={videosData}
                   renderItem={({item}) => <VideoComponent video={item} />}
                   ListHeaderComponent={()=> <Header data={data} />}
                   style={{width: '100%', marginBottom: 65}}
                   refreshing={true}
               />
            </FontLoader>
        </MainLayout>
    )
}