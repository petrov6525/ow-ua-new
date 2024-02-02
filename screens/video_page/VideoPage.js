import MainLayout from "../layouts/mainLayout";
import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import {fontStyles} from "../../styles/font";
import { useRoute } from '@react-navigation/native';
import {useRef} from "react";

export const VideoPage = () => {
    const route = useRoute();
    const { video } = route.params;


    return(
        <MainLayout>
            <SafeAreaView>
                {/*<VideoPlayer
                    video={{ uri: require('../../assets/video/video_1.mp4') }}
                    videoWidth={1600}
                    videoHeight={900}
                    thumbnail={{ uri: require('../../assets/logo.png') }}
                    autoplay={false}
                />*/}
            </SafeAreaView>
        </MainLayout>
    )
}
