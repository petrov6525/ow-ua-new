import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from "react";
import React from "react";
import {CustomVideoPlayer} from "./components/CustomVideoPlayer";
import {Likes} from "./components/Likes";
import {Subscribe} from "./components/Subscribe";
import {Details} from "./components/Details";
import {Comments} from "./components/Comments";
import {RecommendedVideos} from "./components/RecommendedVideos";
import {fontStyles} from "../../styles/font";
import {useSelector} from "react-redux";
import {isVideoOwner} from "../../helpers/videoInfoHelper";
import {Edit} from "./components/Edit";
import {useGetVideoQuery} from "../../api/video/VideoApi";

export const VideoPage = () => {
    const route = useRoute();
    const {navigate} = useNavigation();
    const videoParams = route.params;
    const [status, setStatus] = React.useState({});
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const {refetch} = useGetVideoQuery(videoParams.video.id);

    useEffect(() => {
        refetch();
    }, []);

    const isOwner = isVideoOwner(videoParams.video.user);
    const Panel = () => {
        return (
            <View style={styles.panel}>
                <Likes videoId={videoParams.video.id}/>
                <Details/>
                {isOwner ? <Edit/> :
                    <Subscribe/>}
            </View>
        )
    }


    return (
        <SafeAreaView style={{backgroundColor: '#0C0F14', flex: 1}}>
            <View>
                {/*<DraggableVideo eventHandler={toHomeHandle} isDraggable={!inFullScreen}>*/}
                <CustomVideoPlayer videoParams={videoParams}/>
                {/*</DraggableVideo>*/}
                <ScrollView
                    horizontal={false}
                    stickyHeaderHiddenOnScroll={true}
                    stickyHeaderIndices={[0]}
                    style={{marginBottom: 465}}
                >

                    <View style={{backgroundColor: '#0C0F14'}}>
                        <Text style={styles.videoTitle}>Video Title</Text>
                        <Panel/>
                        <Comments videoId={videoParams.video.id}/>
                    </View>
                    {/*<RecommendedVideos />*/}
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    panel: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: "space-between",
        backgroundColor: '#0C0F14',
    },
    videoTitle: {
        ...fontStyles.noirProRegular,
        paddingTop: 5,
        paddingLeft: 10
    }
})
