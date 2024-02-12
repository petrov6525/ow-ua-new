
import BaseNavigation from "./screens/navigations/BaseNavigation";
import 'react-native-gesture-handler';
import {Provider, useDispatch} from "react-redux";
import {store} from "./store/store";
import {useGetAllCategoriesQuery} from "./api/video/VideoApi";
import {View} from "react-native";
import {useEffect} from "react";
import axiosInstance from "./routing/axios";
import AuthService from "./services/authService";
import {ResizeMode, Video} from "expo-av";
import VideoPlayer from "expo-video-player";
import * as React from 'react';

export default function App() {
  return (
      <Provider store={store}>
          <BaseNavigation />
          {/*<Test />*/}
      </Provider>
  );
}

const Test = () => {
    const { data, error } = useGetAllCategoriesQuery();

    const dispatch = useDispatch();
    const authService = new AuthService(dispatch);

    useEffect(() => {
        authService.IsAuth();
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data]);

    useEffect(() => {
        console.log(error);
    }, [error]);

    const fetchData = async () => {
        try {
            // const response = await axiosInstance('')
        } catch (e) {
            console.log(e);
        }

    }

    useEffect(() => {
        fetchData();
    }, []);

    const video = React.useRef(null);

    return(
        <View>
            <VideoPlayer
                // header={<VideoHeader/>}
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    /*source: {
                        uri: videoParams.video.uri
                    },*/
                    source: require('./local.mp4'),
                    // usePoster: true,
                    // posterSource: require('../../../assets/video_img.png'),
                    // posterStyle:{width: videoWidth, height: videoHeight},
                    ref: video,
                    isMuted: false,
                }}
                fullscreen={{
                    /*inFullscreen: inFullScreen,
                    enterFullscreen: enterFullScreen,
                    exitFullscreen: exitFullScreen*/
                }}
                style={{
                    // videoBackgroundColor: 'black',
                    // height: videoHeight,
                    // width: videoWidth,
                    width: 300,
                    height: 150

                }}
            />
            {/*<Video
                source={{uri: "https://firebasestorage.googleapis.com/v0/b/ow-ua-eb53f.appspot.com/o/Videos%2F1707654123495?alt=media&token=d22d6660-90aa-4754-8102-55d508662442"}}
                style={{
                    width: 100,
                    height: 250,
                    borderRadius: 6,
                    backgroundColor: 'black'
                }}
                resizeMode='contain'
                isMuted={true}
                shouldPlay={false}
            />*/}
        </View>
    )
}



/*

import {Button, SafeAreaView} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import {googleConfig} from "./config";
import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native'
import { ResizeMode } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef } from 'react'
import VideoPlayer from 'expo-video-player'

WebBrowser.maybeCompleteAuthSession();

export default  function App() {
    const [inFullscreen, setInFullsreen] = useState(false)
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const refVideo = useRef(null)
    const refVideo2 = useRef(null)
    const refScrollView = useRef(null)
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: googleConfig.androidClientId,
        webClientId: googleConfig.webClientId,
        // expoClientId: googleConfig.webClientId
    })

    useEffect(() => {
        console.log(response);
    }, [response]);
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title={"Sign in With Google"} onPress={()=> promptAsync()} />
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    isMuted: true,
                    resizeMode: ResizeMode.CONTAIN,
                    /!*source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },*!/
                    source: require('./local.mp4'),
                    ref: refVideo2,
                }}
                fullscreen={{
                    inFullscreen: inFullscreen2,
                    enterFullscreen: async () => {
                        setStatusBarHidden(true, 'fade')
                        setInFullsreen2(!inFullscreen2)
                        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
                        refVideo2.current.setStatusAsync({
                            shouldPlay: true,
                        })
                    },
                    exitFullscreen: async () => {
                        setStatusBarHidden(false, 'fade')
                        setInFullsreen2(!inFullscreen2)
                        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                    },
                }}
                style={{
                    videoBackgroundColor: 'black',
                    height: inFullscreen2 ? Dimensions.get('window').width : 160,
                    width: inFullscreen2 ? Dimensions.get('window').height : 320,
                }}
            />
        </SafeAreaView>
    )
}
*/
