import React from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {fontStyles} from "../../../styles/font";
import { useNavigation } from '@react-navigation/native';



const video = {
    videoLogo: require('../../../assets/video_img.png'),
    title: "Video Title",
    channelLogo: require('../../../assets/channel_profile_logo.png'),
    channelTitle: "Channel title",
    time: "3:46",
    watchInfo: "2 млн переглядів 3 роки тому",
    id: 1
}

export const Video = ({style}) => {
    const navigation = useNavigation();

    const handleVideoPage = () => {
        navigation.navigate('VideoPage', {video: video});
    }

    return (
        <View style={[styles.main, style]}>
            <View style={{position: 'relative'}} onTouchEnd={handleVideoPage}>
                <Image source={video.videoLogo} style={{width: '100%', height: 250}}/>
                <Text style={[styles.time, fontStyles.noirProRegular]}>{video.time}</Text>
            </View>
            <View style={{padding: 15, flexDirection: 'row'}}>
                <Image source={video.channelLogo} style={{width: 60, height: 60, marginRight: 15}}
                       onTouchEnd={()=> {
                           navigation.navigate('ChannelPage')}}/>
                <View onTouchEnd={handleVideoPage}>
                    <Text style={[fontStyles.noirProRegular, {fontSize: 17}]}>{video.title}</Text>
                    <Text style={[fontStyles.noirProRegular, {
                        fontSize: 15,
                        color: '#87898D'
                    }]}>{video.channelTitle}</Text>
                    <Text style={[fontStyles.noirProRegular, {fontSize: 13, color: '#87898D'}]}>{video.watchInfo}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        marginBottom: 20
    },
    time: {
        position: "absolute",
        color: 'white',
        bottom: 20,
        right: 5,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#0C0F14',
        borderRadius: 15,
    }
})