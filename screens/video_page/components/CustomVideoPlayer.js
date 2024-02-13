import {ResizeMode} from "expo-av";
import VideoPlayer from "expo-video-player";
import {BackHandler, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {fontStyles} from "../../../styles/font";
import * as NavigationBar from "expo-navigation-bar";
import {setStatusBarHidden} from "expo-status-bar";
import * as ScreenOrientation from "expo-screen-orientation";
import {useNavigation} from "@react-navigation/native";
import {useEffect, useState} from "react";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsFullScreen} from "../../../store/slice/videoSlice";
import {getWatchInfo} from "../../../helpers/videoInfoHelper";
import {useGetViewsCountQuery} from "../../../api/video/VideoApi";


export const CustomVideoPlayer = ({videoParams}) => {
    const navigation = useNavigation();
    const video = React.useRef(null);
    const [inFullScreen, setInFullScreen] = useState(false);
    const {data: viewsCount} = useGetViewsCountQuery(videoParams.video.id);

    const watchInfo = viewsCount ?? 0;

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


    const handleBackPress = () => {
        return true;
    }

    const handleVideoPage = () => {
        navigation.goBack();
        navigation.navigate('VideoPage');
    }

    const handleChannelPage = () => {
        navigation.navigate('ChannelPage', {channel: videoParams.video.user});
    }
    const ToHome = () => {
        return (
            <TouchableOpacity
                onPress={()=> {
                    BackHandler.removeEventListener(
                        'hardwareBackPress',
                        handleBackPress
                    );
                    navigation.goBack();
                }}
                style={[styles.home, {display: inFullScreen ? 'none' : 'flex'}]}>
                <MaterialCommunityIcons name="arrow-left" color={'rgba(255,255,255,0.8)'} size={30}/>
                <Text style={fontStyles.noirProRegular}>Назад</Text>
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

    const videoData = {
        videoLogo: require('../../../assets/video_img.png'),
        title: "Video Title",
        channelLogo: require('../../../assets/channel_profile_logo.png'),
        channelTitle: "Channel title",
        time: "3:46",
        watchInfo: "2 млн переглядів 3 роки тому",
        id: 1
    }

    return(
        <>
            <VideoPlayer
                header={<VideoHeader/>}
                videoProps={{
                    shouldPlay: false,
                    resizeMode: ResizeMode.CONTAIN,
                    source: {
                        //uri: videoParams.video.uri
                        uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    },
                    // source: require('../../../assets/video/video_1.mp4'),
                    // usePoster: true,
                    // posterSource: require('../../../assets/video_img.png'),
                    // posterStyle:{width: videoWidth, height: videoHeight},
                    ref: video,
                    isMuted: false,
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

            {/*<VideoPlayer
                videoProps={{
                    shouldPlay: true,
                    isMuted: true,
                    resizeMode: ResizeMode.CONTAIN,
                    /*source: {
                    uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                },
                    source: require('../../../local.mp4'),
                    ref: video,
                }}
                fullscreen={{
                    inFullscreen: inFullScreen,
                    enterFullscreen: async () => {
                        setStatusBarHidden(true, 'fade')
                        setInFullScreen(!inFullScreen)
                        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT)
                        video.current.setStatusAsync({
                            shouldPlay: true,
                        })
                    },
                    exitFullscreen: async () => {
                        setStatusBarHidden(false, 'fade')
                        setInFullScreen(!inFullScreen)
                        await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.DEFAULT)
                    },
                }}
                style={{
                    videoBackgroundColor: 'black',
                    height: inFullScreen ? Dimensions.get('window').width : 160,
                    width: inFullScreen ? Dimensions.get('window').height : 320,
                }}
            />*/}
            <View style={{padding: 15, flexDirection: 'row'}}>
                <Image source={{uri: videoParams.video.user.photoUrl}} style={{width: 60, height: 60, marginRight: 15, borderRadius: 30}}
                       onTouchEnd={handleChannelPage}/>
                <View onTouchEnd={handleVideoPage}>
                    <Text style={[fontStyles.noirProRegular, {fontSize: 17}]}>{videoParams.video.title}</Text>
                    <Text style={[fontStyles.noirProRegular, {
                        fontSize: 15,
                        color: '#87898D'
                    }]}>{videoParams.video.user.displayName}</Text>
                    <Text style={[fontStyles.noirProRegular, {fontSize: 13, color: '#87898D'}]}>{watchInfo} переглядів</Text>
                </View>
            </View>
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