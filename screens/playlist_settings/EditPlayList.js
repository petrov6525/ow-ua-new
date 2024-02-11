import {useNavigation} from "@react-navigation/native";
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useState} from "react";


export const EditPlayList = () => {
    const navigation = useNavigation();
    const [statusIndex, setStatusIndex] = useState(0);
    return (
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View>
                    <View>
                        <Text style={fontStyles.noirProRegular}>Назва:</Text>
                        <TextInput style={styles.input}/>
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center'}}
                        >
                            <Text style={fontStyles.noirProRegular}>Доступ:</Text>
                        </TouchableOpacity>

                        <View style={{marginTop: 20, padding: 10}}>
                            <TouchableOpacity
                                onPress={()=>setStatusIndex(0)}
                                style={[styles.statusButton,{backgroundColor: statusIndex === 0 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                            >
                                <MaterialCommunityIcons name="shield-lock-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                                <Text style={styles.statusText}>Приватний</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>setStatusIndex(1)}
                                style={[styles.statusButton,{backgroundColor: statusIndex === 1 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                            >
                                <MaterialCommunityIcons name="account-group-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                                <Text style={styles.statusText}>Публічний</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.buttonsBox}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.goBack()}
                    >
                        <Text style={fontStyles.noirProRegular}>Скасувати</Text>
                        <MaterialCommunityIcons name="cancel" color={'rgba(255,255,255,0.8)'} size={20}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>navigation.navigate('Playlists')}
                    >
                        <Text style={fontStyles.noirProRegular}>Зберегти</Text>
                        <MaterialCommunityIcons name="check" color={'rgba(255,255,255,0.8)'} size={25}/>
                    </TouchableOpacity>
                </View>


            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
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
        height: 500,
        width: '100%',
        padding: 20,
        justifyContent: 'space-between'
    },
    input: {
        borderWidth: 1,
        borderColor: '#5A58C9',
        borderRadius: 5,
        ...fontStyles.noirProRegular,
        paddingHorizontal: 10,
        paddingVertical: 2,
        marginTop: 5
    },
    button: {
        flexDirection: 'row'
    },
    buttonsBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 50,
    },
    statusButton: {
        // backgroundColor: 'rgba(90,88,201,0.4)',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    statusText: {
        ...fontStyles.noirProRegular,
        marginHorizontal: 10
    }
});