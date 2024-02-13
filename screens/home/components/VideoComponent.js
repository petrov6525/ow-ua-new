import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, Image} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation, useRoute} from '@react-navigation/native';
import {Video} from "expo-av";
import {getWatchInfo} from "../../../helpers/videoInfoHelper";
import {useGetViewsCountQuery} from "../../../api/video/VideoApi";
import {useSelector} from "react-redux";



export const VideoComponent = ({video}) => {
    const navigation = useNavigation();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const { params } = useRoute();
    const {data: viewsCount} = useGetViewsCountQuery(video.id);
    const watchInfo = viewsCount ?? 0;


    const handleVideoPage = () => {
        if (!isAuth) {
            navigation.navigate('NeedAuth', {text: "Авторизуйтесь для перегляду відео", accessBack: false});
        }
        else {
            navigation.navigate('VideoPage', {video: video});
        }
    }

    const handleChannelPage = () => {
        navigation.navigate('ChannelPage', {channel: video.user});
    }

    if (video) {
        return (
            <View style={[styles.main]}>

                <View style={{position: 'relative', width: '100%', height: 250, backgroundColor: 'black', alignItems: "center"}} onTouchEnd={handleVideoPage}>
                    <Video
                        // source={{uri: video.uri}}
                        source={require("../../../local.mp4")}
                        style={{
                            width: 100,
                            height: 250,
                            borderRadius: 6,
                            backgroundColor: 'black'
                        }}
                        resizeMode='contain'
                        isMuted={true}
                        shouldPlay={false}
                    />
                    {/*<Text style={[styles.time, fontStyles.noirProRegular]}>{video.time}</Text>*/}
                </View>
                <View style={{padding: 15, flexDirection: 'row'}}>
                    <Image source={{uri: video.user.photoUrl}} style={{width: 60, height: 60, marginRight: 15, borderRadius: 30}}
                           onTouchEnd={handleChannelPage}/>
                    <View onTouchEnd={handleVideoPage}>
                        <Text style={[fontStyles.noirProRegular, {fontSize: 17}]}>{video.title}</Text>
                        <Text style={[fontStyles.noirProRegular, {
                        fontSize: 15,
                        color: '#87898D'
                    }]}>{video.user.displayName}</Text>
                        <Text style={[fontStyles.noirProRegular, {fontSize: 13, color: '#87898D'}]}>{watchInfo} переглядів</Text>
                    </View>
                </View>
            </View>
        )
    }


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