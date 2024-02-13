import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect} from "react";


export const PlayListSettings = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {playlist} = route.params;

    return(
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate('EditPlayList', {playlist: playlist})}
                >
                    <Text style={styles.text}>Редагувати</Text>
                    <MaterialCommunityIcons name="lead-pencil" color={'rgba(255,255,255,0.8)'} size={25}/>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{flexDirection: 'row'}}
                    onPress={()=>navigation.navigate('DeletePlaylist', {playlistId: playlist.id})}
                >
                    <Text style={styles.text}>Видалити</Text>
                    <MaterialCommunityIcons name="delete" color={'rgba(255,255,255,0.8)'} size={25}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProRegular,
        marginRight: 20,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)'
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: '#0C0F14',
        paddingTop: 20,
        position: 'absolute',
        bottom: 0,
        height: 150,
        width: '100%',
        padding: 50,
        alignItems: "flex-end"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }
})