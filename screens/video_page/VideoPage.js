import MainLayout from "../layouts/mainLayout";
import {Text, View, StyleSheet, SafeAreaView} from "react-native";
import {fontStyles} from "../../styles/font";
import { useRoute } from '@react-navigation/native';
import {useRef} from "react";
import React from "react";

export const VideoPage = () => {
    const route = useRoute();
    const { videoParams } = route.params;
    const videoPlayer = React.useRef(null);
    const [status, setStatus] = React.useState({});


    return(
        <MainLayout>
            <SafeAreaView>

            </SafeAreaView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    video: {
        flex: 1,
        alignSelf: 'stretch'
    }
})
