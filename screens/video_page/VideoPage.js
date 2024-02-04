import MainLayout from "../layouts/mainLayout";
import {Text, View, StyleSheet, SafeAreaView, Button, ActivityIndicator, Dimensions} from "react-native";
import {fontStyles} from "../../styles/font";
import {useRoute} from '@react-navigation/native';
import {useEffect, useMemo, useRef, useState} from "react";
import React from "react";
import {Video, ResizeMode, VideoNaturalSize} from 'expo-av';
import nativeDeviceInfo from "react-native/Libraries/Utilities/NativeDeviceInfo";
import VideoPlayer from 'expo-video-player'
import {size} from "@shopify/react-native-skia";
import { ActivityIndicatorProps, BackHandler } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { setStatusBarHidden } from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar';

export const VideoPage = () => {
    const route = useRoute();
    const {videoParams} = route.params;
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});
    const [inFullscreen, setInFullsreen] = useState(false);

    const videoWidth = inFullscreen ? Dimensions.get('screen').height : Dimensions.get('screen').width;
    const videoHeight = inFullscreen ? Dimensions.get('screen').width : 230;

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );

        return () => {
            backHandler.remove();
        };
    }, []);

    const handleBackPress = useMemo(()=> {return ()=> {if (inFullscreen) return true}}, [inFullscreen]);




    return (
        // <MainLayout>
            <SafeAreaView style={{backgroundColor: '#0C0F14', flex: 1}}>
                <View>
                    <VideoPlayer
                        videoProps={{
                            shouldPlay: false,
                            resizeMode: ResizeMode.CONTAIN,
                            source: {
                                uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                            },
                            // source: require('../../assets/video/video_1.mp4'),
                            ref: video,
                        }}
                        fullscreen={{
                            inFullscreen: inFullscreen,
                            enterFullscreen: async () => {
                                NavigationBar.setVisibilityAsync('hidden');
                                NavigationBar.setBehaviorAsync('inset-swipe')
                                setStatusBarHidden(true, 'fade')
                                setInFullsreen(!inFullscreen)
                                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
                                video.current.setStatusAsync({
                                    shouldPlay: true,
                                })
                            },
                            exitFullscreen: async () => {
                                NavigationBar.setVisibilityAsync('visible');
                                setStatusBarHidden(false, 'fade')
                                setInFullsreen(!inFullscreen)
                                await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
                            }
                        }}
                        style={{
                            // videoBackgroundColor: 'black',
                            height: videoHeight,
                            width: videoWidth,

                        }}
                    />
                </View>

            </SafeAreaView>
            /*<Video
                ref={video}
                style={[styles.video]}
                source={{
                    uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                }}
                // source={require('../../assets/video/video_1.mp4')}
                resizeMode={ResizeMode.CONTAIN}
                shouldPlay={true}
                useNativeControls={true}
                isMuted={true}
                // rotation={90}

                onPlaybackStatusUpdate={status => setStatus(() => status)}
            />

            <View style={styles.video}>
                <Button
                    title={'Rotate'}
                    onPress={() =>
                        {
                            console.log(video);
                        }
                    }
                />
            </View>*/
        // </MainLayout>
    )
}

const styles = StyleSheet.create({
    video: {
        // flex: 1,
        // top: 0,
        // alignSelf: 'stretch',
        // backgroundColor: 'red'
    }
})
