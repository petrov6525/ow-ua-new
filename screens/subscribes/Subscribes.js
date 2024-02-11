import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SubscribeMini} from "./components/SubscribeMini";
import {LogoCenter} from "../components/LogoCenter";
import {SubscribesHorizontal} from "./components/SubscribesHorisontal";
import {SubscribersVideos} from "./components/SubscribersVideos";


const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={{paddingTop: 20, paddingBottom: 20, backgroundColor: "#0C0F14",}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}}>
                <LogoCenter/>
                <TouchableOpacity onPress={()=> navigation.navigate('AllSubscribes')}>
                    <Text style={fontStyles.noirProMedium}>All</Text>
                </TouchableOpacity>
            </View>

            <SubscribesHorizontal/>
        </View>
    )
}

export default function Subscribes() {
    const {navigate} = useNavigation();
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );


    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути підписки"}/>
        )
    }

    return (
        <MainLayout>
            <FontLoader>
                <ScrollView
                    stickyHeaderHiddenOnScroll={true}
                    stickyHeaderIndices={[0]}
                >
                    <Header/>
                    {/*<SubscribersVideos />*/}
                </ScrollView>

            </FontLoader>
        </MainLayout>
    )
}