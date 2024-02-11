import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {fontStyles} from "../../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {PlayListSettings} from "../../playlist_settings/PlayListSettings";


export const Playlist = ({playlist}) => {
    const navigation = useNavigation();
    const handleTouch = () => {
        navigation.navigate('PlayListPage', {title: null});
    }
    return (
        <View style={styles.view}>
            <View style={styles.box} onTouchEnd={handleTouch}>
                <MaterialCommunityIcons name="animation-play-outline" color={'rgba(255,255,255,0.5)'} size={30}/>
                <Text style={[fontStyles.noirProRegular, {color: 'rgba(255,255,255,0.5)'}]}>24 video</Text>
            </View>

            <View style={styles.titleBox} onTouchEnd={handleTouch}>
                <Text style={styles.titleText}>Playlist Title</Text>
                <Text style={styles.statusText}>private</Text>
            </View>

            <TouchableOpacity
                style={styles.moreButton}
                onPress={() => navigation.navigate('PlayListSettings')}
            >
                <Text style={styles.moreText}>...</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginVertical: 20,
        marginHorizontal: 20
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(90,88,201,0.2)',
    },
    titleText: {
        ...fontStyles.noirProRegular,
        textAlign: 'left'
    },
    statusText: {
      ...fontStyles.noirProRegular,
      fontSize: 12,
        color: '#858585'
    },
    titleBox: {
        // backgroundColor: 'red',
        flex: 1,
        alignSelf: 'center',
        marginHorizontal: 20
    },
    moreText: {
        ...fontStyles.noirProMedium,
        fontSize: 20,
        transform: [{
            rotate: '90deg'
        }],
    },
    moreButton: {
        paddingLeft: 10
    }
})