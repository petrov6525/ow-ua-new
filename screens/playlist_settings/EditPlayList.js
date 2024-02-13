import {useNavigation, useRoute} from "@react-navigation/native";
import {ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useEffect, useState} from "react";
import {useEditPlaylistMutation} from "../../api/video/PlaylistApi";


export const EditPlayList = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const {playlist} = route.params;
    const [statusIndex, setStatusIndex] = useState(playlist.accessStatus.id);
    const [title, setTitle] = useState(playlist.title);
    const [editPlaylist] = useEditPlaylistMutation();
    const [isRequest, setIsRequest] = useState(false);

    const handleEdit = async () => {
        if (title.trim() === "") return;
        setIsRequest(true);
        try {
            await editPlaylist({
                id: playlist.id,
                title: title,
                accessStatus: {
                    id: statusIndex
                }
            }).unwrap();
            navigation.navigate('Playlists');
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setIsRequest(false);
        }
    }


    return (
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View>
                    <View>
                        <Text style={fontStyles.noirProRegular}>Назва:</Text>
                        <TextInput
                            value={title}
                            onChangeText={text=>setTitle(text)}
                            style={styles.input}
                        />
                    </View>

                    <View style={{marginTop: 20}}>
                        <TouchableOpacity
                            style={{flexDirection: 'row', alignItems: 'center'}}
                        >
                            <Text style={fontStyles.noirProRegular}>Доступ:</Text>
                        </TouchableOpacity>

                        <View style={{marginTop: 20, padding: 10}}>
                            <TouchableOpacity
                                onPress={()=>setStatusIndex(1)}
                                style={[styles.statusButton,{backgroundColor: statusIndex === 1 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                            >
                                <MaterialCommunityIcons name="account-group-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                                <Text style={styles.statusText}>Публічний</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={()=>setStatusIndex(2)}
                                style={[styles.statusButton,{backgroundColor: statusIndex === 2 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                            >
                                <MaterialCommunityIcons name="shield-lock-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                                <Text style={styles.statusText}>Приватний</Text>
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

                    {isRequest ? <ActivityIndicator size={"small"} /> :
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleEdit}
                        >
                            <Text style={fontStyles.noirProRegular}>Зберегти</Text>
                            <MaterialCommunityIcons name="check" color={'rgba(255,255,255,0.8)'} size={25}/>
                        </TouchableOpacity>
                    }

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
        height: 30
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