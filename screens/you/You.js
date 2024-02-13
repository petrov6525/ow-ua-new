import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {ScrollView, Text, StyleSheet, SafeAreaView, View, TouchableOpacity, Image, BackHandler} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {HistoryHorizontal} from "./components/HistoryHorizontal";
import {LikedHorizontal} from "./components/LikedHorizontal";
import {PlaylistsHorizontal} from "./components/PlaylistsHorizontal";
import {MyChannelHorizontal} from "./components/MyChannelHorizontal";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import asyncStorageService from "../../services/asyncStorageService";

export default function You() {
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const navigation = useNavigation();
    const [photo, setPhoto] = useState("");
    const [name,setName] = useState("");
    const [user, setUser] = useState({});

    useEffect(() => {
        const init = navigation.addListener('focus', fetch);

        return () => {
            // init.remove();
        };
    }, [fetch]);

    const fetch = async () => {
        const user = await asyncStorageService.GetUser();
        setName(user?.displayName);
        setPhoto(user?.photoUrl);
        setUser(user);
    }

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
                            <View style={{marginHorizontal: 10, marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}>
                                {
                                    !photo ? <MaterialCommunityIcons name="account" color={'white'} size={50}/>
                                        :
                                        <Image source={{uri: photo}} style={{width: 50, height: 50, borderRadius: 30}} />
                                }
                                <View>
                                    <Text style={[fontStyles.noirProMedium,{
                                        marginHorizontal: 10
                                    }]}>{name}</Text>
                                </View>

                            </View>
                            <TouchableOpacity
                                style={{position: 'absolute', top: 10, right: 10}}
                                onPress={()=>navigation.navigate('ProfileSettings')}
                            >
                                <MaterialCommunityIcons name="account-cog-outline" color={'rgba(255,255,255,0.5)'} size={30}/>
                            </TouchableOpacity>
                        </View>
                        {/*<HistoryHorizontal />*/}
                        <LikedHorizontal />
                        <PlaylistsHorizontal />
                        <MyChannelHorizontal user={user} />
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