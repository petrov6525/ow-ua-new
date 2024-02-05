import {
    View,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text
} from "react-native";
import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from "react";
import React from "react";
import {CustomVideoPlayer} from "./components/CustomVideoPlayer";
import {Likes} from "./components/Likes";
import {Subscribe} from "./components/Subscribe";
import {Details} from "./components/Details";
import {Comments} from "./components/Comments";
import {RecommendedVideos} from "./components/RecommendedVideos";
import {fontStyles} from "../../styles/font";
import {useSelector} from "react-redux";

export const VideoPage = () => {
    const route = useRoute();
    const { navigate } = useNavigation();
    const {videoParams} = route.params;
    const [status, setStatus] = React.useState({});
    const [inFullScreen, setInFullScreen] = useState(false);
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );




    const Panel = () => {
        return (
            <View style={styles.panel}>
                <Likes/>
                <Details/>
                <Subscribe/>
            </View>
        )
    }


    return (
        <SafeAreaView style={{backgroundColor: '#0C0F14'}}>
            <View
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
                    <View style={{backgroundColor: '#0C0F14'}}>
                        <Text style={styles.videoTitle}>Video Title</Text>
                        <Panel/>
                        <Comments/>
                    </View>
                    <RecommendedVideos />
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
