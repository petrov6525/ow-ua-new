import {ResizeMode} from "expo-av";
import VideoPlayer from "expo-video-player";
import {BackHandler, Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {fontStyles} from "../../../styles/font";
import * as NavigationBar from "expo-navigation-bar";
import {setStatusBarHidden} from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import React from "react";
import {useSelector} from "react-redux";


export const CustomVideoPlayer = ({inFullScreen, setInFullScreen}) => {
    const {navigate} = useNavigation();
    const video = React.useRef(null);
    const isFullScreen = useSelector(
        (state) => state.videoReducer.isFullScreen
    );

    const videoWidth = inFullScreen ? Dimensions.get('screen').height : Dimensions.get('screen').width;
    // const videoWidth = 500;
    const videoHeight = inFullScreen ? Dimensions.get('screen').width : 230;
    // const videoHeight = 100;
    const enterFullScreen = () => {
        NavigationBar.setVisibilityAsync('hidden');
        NavigationBar.setBehaviorAsync('inset-swipe')
        setStatusBarHidden(true, 'fade')
        setInFullScreen(!inFullScreen)
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
        video.current.setStatusAsync({
            // shouldPlay: true,
        })
    }

    const exitFullScreen = () => {
        NavigationBar.setVisibilityAsync('visible');
        setStatusBarHidden(false, 'fade')
        setInFullScreen(false)
        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT)
    }

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );

        return () => {
            backHandler.remove();
        };
    }, []);

    useEffect(() => {
        // console.log(inFullScreen);
    }, [inFullScreen]);


    const handleBackPress = () => {
        return true;
    }
    const ToHome = () => {
        return (
            <TouchableOpacity
                onPress={()=> {
                    BackHandler.removeEventListener(
                        'hardwareBackPress',
                        handleBackPress
                    );
                    navigate('Main');
                }}
                style={[styles.home, {display: inFullScreen ? 'none' : 'flex'}]}>
                <MaterialCommunityIcons name="home" color={'rgba(255,255,255,0.8)'} size={30}/>
                <Text style={fontStyles.noirProRegular}>На головну</Text>
            </TouchableOpacity>
        )
    }

    const VideoTitle = () => {
        return (
            <Text style={[fontStyles.noirProRegular, styles.videoTitle]}>
                Video Title
            </Text>
        )
    }

    const VideoHeader = () => {
        return (
            inFullScreen ? <VideoTitle/> : <ToHome/>
        )
    }
    return(
        <>
            <VideoPlayer
                header={<VideoHeader/>}
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    /*source: {
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    },*/
                    usePoster: true,
                    posterSource: require('../../../assets/video_img.png'),
                    posterStyle:{width: videoWidth, height: videoHeight},
                    source: require('../../../assets/video/video_1.mp4'),
                    ref: video,
                    isMuted: true,
                }}
                fullscreen={{
                    inFullscreen: inFullScreen,
                    enterFullscreen: enterFullScreen,
                    exitFullscreen: exitFullScreen
                }}
                style={{
                    // videoBackgroundColor: 'black',
                    height: videoHeight,
                    width: videoWidth,

                }}
            />
        </>

    )
}

const styles = StyleSheet.create({
    video: {
        // flex: 1,
        // top: 0,
        // alignSelf: 'stretch',
        // backgroundColor: 'red'
    },
    home: {
        position: "absolute",
        top: 5,
        left: 5,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 20
    },
    videoTitle: {
        position: "absolute",
        top: 10,
        left: 10
    }
})