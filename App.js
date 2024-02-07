/*
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
*/

/*import {Button, SafeAreaView, Text, View} from "react-native";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import {googleConfig} from "./config";

WebBrowser.maybeCompleteAuthSession();

export default  function App() {
    const [userInfo, setUserInfo] = useState(null);
    const [request, response, promptAsync] = Google.useAuthRequest({
        androidClientId: googleConfig.androidClientId,
        webClientId: googleConfig.webClientId,
        expoClientId: googleConfig.webClientId
    })

    useEffect(() => {
        console.log(response);
    }, [response]);
    return(
        <SafeAreaView style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title={"Sign in With Google"} onPress={()=> promptAsync()} />
        </SafeAreaView>
    )
}*/

/*import React from 'react';
import { View, Text, Button, Modal, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Open Modal" onPress={() => navigation.navigate('ModalScreen')} />
    </View>
);

const ModalScreen = () => (
    <Modal visible={true} presentationStyle="pageSheet">
        {/!*<Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: 'red', // Устанавливаем цвет фона системной панели
                },
                headerTintColor: 'white', // Устанавливаем цвет текста кнопок навигации
            }}
        >*!/}
            <Stack.Screen name="ModalContent" component={ModalContent} />
        {/!*</Stack.Navigator>*!/}
    </Modal>
);

const ModalContent = ({ navigation }) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Modal Screen</Text>
        <Button title="Close" onPress={() => navigation.goBack()} />
    </View>
);

const App = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="ModalScreen" component={ModalScreen} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default App;*/








import * as ScreenOrientation from 'expo-screen-orientation'
import { Dimensions, ScrollView, StyleSheet, Text } from 'react-native'
import { ResizeMode } from 'expo-av'
import { setStatusBarHidden } from 'expo-status-bar'
import React, { useRef, useState } from 'react'
import VideoPlayer from 'expo-video-player'

const App = () => {
    const [inFullscreen, setInFullsreen] = useState(false)
    const [inFullscreen2, setInFullsreen2] = useState(false)
    const [isMute, setIsMute] = useState(false)
    const refVideo = useRef(null)
    const refVideo2 = useRef(null)
    const refScrollView = useRef(null)

    return (
        <ScrollView
            scrollEnabled={!inFullscreen2}
            ref={refScrollView}
            onContentSizeChange={() => {
                if (inFullscreen2) {
                    refScrollView.current.scrollToEnd({ animated: true })
                }
            }}
            style={styles.container}
            contentContainerStyle={styles.contentContainer}
        >
            {/*<Text style={[styles.text, { fontWeight: 'bold', textTransform: 'uppercase' }]}>
                Examples
            </Text>
             <Text>ShouldPlay (autoplay) is true only in the first example</Text>
            <Text style={styles.text}>Basic</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
            />*/}

            {/*<Text style={styles.text}>Local file</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: require('./local.mp4'),
                }}
                style={{ height: 160 }}
            />*/}

            {/*<Text style={styles.text}>Only video without controls</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                slider={{
                    visible: false,
                }}
                fullscreen={{
                    visible: false,
                }}
                timeVisible={false}
                style={{ height: 160 }}
            />*/}

            {/*<Text style={styles.text}>Some styling</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                style={{
                    videoBackgroundColor: 'transparent',
                    controlsBackgroundColor: 'red',
                    height: 200,
                }}
            />*/}

            {/*<Text style={styles.text}>With custom icons</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                icon={{
                    play: <Text style={{ color: '#FFF' }}>PLAY</Text>,
                    pause: <Text style={{ color: '#FFF' }}>PAUSE</Text>,
                }}
                style={{ height: 160 }}
            />*/}

            {/*<Text style={styles.text}>With some more styling</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                style={{
                    height: 160,
                    width: 160,
                    videoBackgroundColor: 'yellow',
                    controlsBackgroundColor: 'blue',
                }}
            />*/}

            {/*<Text style={styles.text}>With Mute</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                    isMuted: isMute,
                }}
                mute={{
                    enterMute: () => setIsMute(!isMute),
                    exitMute: () => setIsMute(!isMute),
                    isMute,
                }}
                style={{ height: 160 }}
            />*/}

            {/*<Text style={styles.text}>Fullscren icon hidden</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                fullscreen={{
                    visible: false,
                }}
                style={{ height: 160 }}
            />*/}

            {/*<Text style={styles.text}>Ref - clicking on Enter/Exit fullscreen changes playing</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                    ref: refVideo,
                }}
                fullscreen={{
                    enterFullscreen: () => {
                        setInFullsreen(!inFullscreen)
                        refVideo.current.setStatusAsync({
                            shouldPlay: true,
                        })
                    },
                    exitFullscreen: () => {
                        setInFullsreen(!inFullscreen)
                        refVideo.current.setStatusAsync({
                            shouldPlay: false,
                        })
                    },
                    inFullscreen,
                }}
                style={{ height: 160 }}
            />*/}

            <Text style={styles.text}>Fullscren</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    resizeMode: ResizeMode.CONTAIN,
                    /*source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },*/
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

            {/*<Text style={styles.text}>Custom title</Text>
            <VideoPlayer
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },
                }}
                style={{
                    videoBackgroundColor: 'black',
                }}
                header={<Text style={{ color: '#FFF' }}>Custom title</Text>}
            />*/}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    contentContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    text: {
        marginTop: 36,
        marginBottom: 12,
    },
})

export default App


/*import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function App() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    return (
        <View style={styles.container}>
            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                useNativeControls
                resizeMode={ResizeMode.CONTAIN}
                isLooping
                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />
            <View style={styles.buttons}>
                <Button
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() =>
                        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    video: {
        alignSelf: 'center',
        width: 320,
        height: 200,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});*/

