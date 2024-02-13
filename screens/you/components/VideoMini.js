import {Image, StyleSheet, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {Video} from "expo-av";
import {useEffect} from "react";


export const VideoMini = ({video}) => {
    const navigation = useNavigation();
    return(
        <View
            onTouchEnd={()=>navigation.navigate('VideoPage', {backPage: 'You', video: video})}
            style={styles.view}
        >
            <Video
                // source={{uri: video.uri}}
                source={require("../../../local.mp4")}
                style={{
                    width: '100%',
                    height: 90,
                    borderRadius: 10,
                    backgroundColor: 'black'
                }}
                resizeMode='contain'
                isMuted={true}
                shouldPlay={false}
            />

            <View style={styles.textBox}>
                <Text style={styles.videoTitle}>{video?.title}</Text>
                <Text style={styles.channelTitle}>{video?.user?.displayName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProMedium,
        fontSize: 20,
        marginHorizontal: 20
    },
    view: {
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        width: 150,
        // height: 150,
        marginHorizontal: 10
    },
    textBox: {
        padding: 5
    },
    videoTitle: {
        ...fontStyles.noirProRegular,
    },
    channelTitle: {
        ...fontStyles.noirProRegular,
        fontSize: 12,
        color: '#858585'
    }
})