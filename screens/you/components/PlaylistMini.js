import { StyleSheet, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const PlaylistMini = () => {
    const navigation = useNavigation();
    return(
        <View
            onTouchEnd={()=>navigation.navigate('PlayListPage')}
            style={styles.view}
        >
            <View style={styles.playList}>
                <MaterialCommunityIcons name="animation-play-outline" color={'rgba(255,255,255,0.5)'} size={30}/>
                <Text style={[fontStyles.noirProRegular, {color: 'rgba(255,255,255,0.5)'}]}>24 video</Text>
            </View>

            <View style={styles.textBox}>
                <Text style={styles.videoTitle}>Playlist Title</Text>
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
        width: 150,
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
    },
    playList: {
        width: '100%',
        height: 90,
        borderRadius: 10,
        backgroundColor: 'rgba(90,88,201,0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})