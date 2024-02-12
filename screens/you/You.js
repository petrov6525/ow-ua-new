import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {ScrollView, Text, StyleSheet, SafeAreaView, View, TouchableOpacity} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {HistoryHorizontal} from "./components/HistoryHorizontal";
import {LikedHorizontal} from "./components/LikedHorizontal";
import {PlaylistsHorizontal} from "./components/PlaylistsHorizontal";
import {MyChannelHorizontal} from "./components/MyChannelHorizontal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";

export default function You() {
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const navigation = useNavigation();

    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути інформацію профілю"} />
        )
    }
    return (
        <MainLayout>
            <FontLoader>
                <SafeAreaView style={styles.view}>
                    <ScrollView style={styles.scroll}>
                        <View style={{flexDirection: 'row', position: 'relative', marginBottom: 10}}>
                            <TouchableOpacity
                                style={{position: 'absolute', top: 10, right: 10}}
                                onPress={()=>navigation.navigate('ProfileSettings')}
                            >
                                <MaterialCommunityIcons name="account-cog-outline" color={'rgba(255,255,255,0.5)'} size={30}/>
                            </TouchableOpacity>
                        </View>
                        <HistoryHorizontal />
                        <LikedHorizontal />
                        <PlaylistsHorizontal />
                        <MyChannelHorizontal />
                    </ScrollView>
                </SafeAreaView>
            </FontLoader>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    scroll: {
        height: '100%',
    },
    view: {
        flex: 1,
        width: '100%',
        paddingBottom: 65
    }
})