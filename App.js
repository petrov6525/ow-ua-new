import BaseNavigation from "./screens/navigations/BaseNavigation";
import 'react-native-gesture-handler';
import {Provider} from "react-redux";
import {store} from "./store/store";

export default function App() {
  return (
      <Provider store={store}>
          <BaseNavigation />
      </Provider>
  );
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
                    source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
                    // source: require('./local.mp4'),
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
