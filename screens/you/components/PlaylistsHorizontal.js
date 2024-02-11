import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {VideoMini} from "./VideoMini";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {PlaylistMini} from "./PlaylistMini";


export const PlaylistsHorizontal = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.view}>
            <View style={styles.header}>
                <View style={styles.textBlock}>
                    <MaterialCommunityIcons name="animation-play-outline" color={'white'} size={25}/>
                    <Text style={styles.text}>Плейлісти</Text>
                </View>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('Playlists', {title: 'Плейлісти'})}
                    style={styles.allButton}
                >
                    <Text style={styles.allText}>Переглянути все</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true}
            >
                <PlaylistMini />
                <PlaylistMini />
                <PlaylistMini />
                <PlaylistMini />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProMedium,
        fontSize: 20,
        marginLeft: 10
    },
    view: {
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        marginVertical: 20
    },
    allButton: {
        backgroundColor: 'rgba(90,88,201,0.4)',
        paddingHorizontal: 10,
        paddingBottom: 2,
        marginHorizontal: 20,
        borderRadius: 15
    },
    allText: {
      ...fontStyles.noirProRegular,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20
    }
})