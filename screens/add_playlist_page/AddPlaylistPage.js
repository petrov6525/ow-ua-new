import {
    ActivityIndicator,
    BackHandler,
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {fontStyles} from "../../styles/font";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {
    useAddVideoToPlaylistMutation,
    useCreatePlaylistMutation,
    useGetAllPlaylistsForVideoQuery
} from "../../api/video/PlaylistApi";
import {useEffect, useMemo, useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {TextInput} from "react-native-paper";


export const AddPlaylistPage = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [statusId, setStatusId] = useState(1);
    const [title, setTitle] = useState("");
    const [isRequest, setIsRequest] = useState(false);
    const [isError, setIsError] = useState(false);
    const [createPlaylist] = useCreatePlaylistMutation();

    const handleCreate = async () => {
        if (title.trim() === "") return;
        setIsRequest(true);
        try {
            await createPlaylist({
                title: title,
                accessStatus: {
                    id: statusId
                }
            }).unwrap();
            onSuccess();
        } catch (e) {
            console.log(e);
            if (e.originalStatus !== 200) {
                setIsError(true);
            } else {
                onSuccess();
            }
        } finally {
            setIsRequest(false);
        }
    }

    const onSuccess = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <Text style={styles.label}>Назва:</Text>
                <TextInput
                    value={title}
                    onChangeText={text => setTitle(text)}
                    textColor={'white'}
                    style={{
                        ...fontStyles.noirProRegular,
                        backgroundColor: 'transparent',
                        color: 'white',
                        height: 32,
                        marginBottom: 30
                    }}
                />
                <Text style={[styles.label, {marginBottom: 10}]}>Доступ:</Text>
                <TouchableOpacity
                    onPress={() => setStatusId(1)}
                    style={[styles.statusButton, {backgroundColor: statusId === 1 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                >
                    <MaterialCommunityIcons name="account-group-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                    <Text style={styles.statusText}>Публічний</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setStatusId(2)}
                    style={[styles.statusButton, {backgroundColor: statusId === 2 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                >
                    <MaterialCommunityIcons name="shield-lock-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                    <Text style={styles.statusText}>Приватний</Text>
                </TouchableOpacity>

                <>
                {isError ?
                    <TouchableOpacity
                        onPress={()=>setIsError(false)}
                        style={{flexDirection: 'row', marginTop: 100, alignSelf: 'center', alignItems: 'center'}}
                    >
                        <Text style={[fontStyles.noirProMedium,{marginHorizontal: 10, color: 'red'}]}>Виникла помилка</Text>
                        <MaterialCommunityIcons name="cancel" color={'red'} size={30}/>
                    </TouchableOpacity> :
                    isRequest ? <ActivityIndicator size={"large"} /> :
                    <TouchableOpacity
                        onPress={handleCreate}
                        style={{flexDirection: 'row', marginTop: 100, alignSelf: 'center', alignItems: 'center'}}
                    >
                        <Text style={[fontStyles.noirProMedium,{marginHorizontal: 10}]}>Створити</Text>
                        <MaterialCommunityIcons name="check-circle-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                    </TouchableOpacity>
                }
                </>

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
        paddingTop: 20,
        position: 'absolute',
        bottom: 0,
        height: '60%',
        width: '100%',
        padding: 50,
        // alignItems: "flex-end"
    },
    form: {
        rowGap: 10,
        marginVertical: 20
    },
    label: {
        ...fontStyles.noirProRegular,
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
    },
})