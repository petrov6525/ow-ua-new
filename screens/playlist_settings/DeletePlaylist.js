import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";


export const DeletePlaylist = () => {
    const navigation = useNavigation();
    return(
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.text}>Ви впевнені?</Text>

                <View style={styles.buttonsBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.goBack()}
                    >
                        <Text style={fontStyles.noirProRegular}>Ні</Text>
                        <MaterialCommunityIcons name="cancel" color={'rgba(255,255,255,0.8)'} size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate('Playlists')}
                    >
                        <Text style={fontStyles.noirProRegular}>Так</Text>
                        <MaterialCommunityIcons name="check" color={'rgba(255,255,255,0.8)'} size={25}/>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProMedium,
        color: 'rgba(255,255,255,0.8)',
        textAlign: 'center',
        fontSize: 20
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: '#0C0F14',
        position: 'absolute',
        bottom: 0,
        height: 140,
        width: '100%',
        paddingTop: 20,
    },
    button: {
        flexDirection: 'row'
    },
    buttonsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 100,
        marginTop: 10
    }
})