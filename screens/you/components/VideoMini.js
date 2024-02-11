import {Image, StyleSheet, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";


export const VideoMini = () => {
    const navigation = useNavigation();
    return(
        <View
            onTouchEnd={()=>navigation.navigate('VideoPage', {backPage: 'You'})}
            style={styles.view}
        >
            <Image
                style={{width: '100%', height: 90, borderRadius: 10}}
                source={require('../../../assets/video_img.png')}
            />

            <View style={styles.textBox}>
                <Text style={styles.videoTitle}>Video Title</Text>
                <Text style={styles.channelTitle}>Channel Title</Text>
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