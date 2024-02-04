import MainLayout from "../layouts/mainLayout";
import {
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    Button,
    ActivityIndicator,
    Dimensions,
    TouchableOpacity, ScrollView
} from "react-native";
import {fontStyles} from "../../styles/font";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import React from "react";
import {Video, ResizeMode, VideoNaturalSize} from 'expo-av';
import nativeDeviceInfo from "react-native/Libraries/Utilities/NativeDeviceInfo";
import VideoPlayer from 'expo-video-player'
import {size} from "@shopify/react-native-skia";
import {ActivityIndicatorProps, BackHandler} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import {setStatusBarHidden} from 'expo-status-bar'
import * as NavigationBar from 'expo-navigation-bar';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {DraggableVideo} from "../components/DraggableVideo";
import {CustomVideoPlayer} from "./CustomVideoPlayer";
import {Likes} from "./Likes";
import {Subscribe} from "./Subscribe";
import {Details} from "./Details";
import {Comments} from "./Comments";
import {CommentForm} from "./CommentForm";
import {CommentsBox} from "./components/CommentsBox";

export const VideoPage = () => {
    const route = useRoute();
    const {videoParams} = route.params;
    const [status, setStatus] = React.useState({});
    const [inFullScreen, setInFullScreen] = useState(false);
    const { navigate } = useNavigation();


    const toHomeHandle = (isFullScreen) => {
        console.log("Swipe");
        console.log(isFullScreen);
        /*BackHandler.removeEventListener(
            'hardwareBackPress',
            handleBackPress
        );
        navigate('Main');*/
    }

    const handleBackPress = () => {
        console.log("Back");
        return true;
    }

    useEffect(() => {
        // console.log(inFullScreen);
    }, [inFullScreen]);


    const Panel = () => {
        return(
            <View style={styles.panel}>
                <Likes />
                <Details />
                <Subscribe />
            </View>
        )
    }


    return (
        <SafeAreaView style={{backgroundColor: '#0C0F14'}}>
            <View
                // style={{marginBottom: 50}}
            >
                {/*<DraggableVideo eventHandler={toHomeHandle} isDraggable={!inFullScreen}>*/}
                    <CustomVideoPlayer inFullScreen={inFullScreen} setInFullScreen={setInFullScreen}/>
                {/*</DraggableVideo>*/}
                <ScrollView
                    horizontal={false}
                    stickyHeaderHiddenOnScroll={true}
                    stickyHeaderIndices={[0]}
                    style={{marginBottom: 465}}
                >
                    <Panel />
                    <Comments />
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    panel: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between",
        backgroundColor: '#0C0F14',
        // backgroundColor: 'red'
    }
})
