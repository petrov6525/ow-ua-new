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
import {useAddVideoToPlaylistMutation, useGetAllPlaylistsForVideoQuery} from "../../api/video/PlaylistApi";
import {useEffect, useMemo, useState} from "react";
import Ionicons from "react-native-vector-icons/Ionicons";


export const AddToPlaylistPage = () => {
    const route = useRoute();
    const {videoId} = route.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const {data, isLoading, error, refetch} = useGetAllPlaylistsForVideoQuery(videoId);
    const [playlistIds, setPlaylistIds] = useState([]);
    const [addVideoToPlaylist] = useAddVideoToPlaylistMutation();
    const [isRequest, setIsRequest] = useState(false);

    const playlists = useMemo(() => {
        return data ?? null
    }, [data]);
    const currentPlaylists = useMemo(() => {
        return playlists?.filter(item => item.alreadyAdded).map(item => item.id)
    }, [playlists]);

    useEffect(() => {
        setPlaylistIds(currentPlaylists);
    }, [currentPlaylists]);

    useEffect(() => {
        refetch();
    }, []);

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );

        return () => {
            backHandler.remove();
        };
    }, []);


    const handleBackPress = () => {
        navigation.goBack();
    }

    const toggleId = async (id) => {
        setIsRequest(true);
        try {
            const result = await addVideoToPlaylist({
                playListId: id,
                videoId: videoId
            }).unwrap();
            if (result) refetch();
        } catch (e) {
            console.log("Error: ", e);
        } finally {
            setIsRequest(false);
        }
    }


    return (
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>
                <View style={{height: 30, marginBottom: 20}}>
                    {(isLoading || isRequest) ?
                        <ActivityIndicator size={30}/> :
                        <TouchableOpacity onPress={()=>navigation.navigate('AddPlaylistPage')}>
                            <MaterialCommunityIcons name="playlist-plus" color={'rgba(255,255,255,0.8)'} size={30}/>
                        </TouchableOpacity>
                    }
                </View>
                {data &&
                    <FlatList
                        refreshing={true}
                        data={playlists}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                activeOpacity={0.8}
                                onPress={() => toggleId(item.id)}
                                style={[styles.statusButton, {backgroundColor: currentPlaylists?.includes(item.id) ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                            >
                                {item.accessStatus.id === 1 ?
                                    <MaterialCommunityIcons name="account-group" color={'rgba(255,255,255,0.8)'}
                                                            size={30}/> :
                                    <MaterialCommunityIcons name="shield-lock-outline" color={'rgba(255,255,255,0.8)'}
                                                            size={30}/>}
                                <Text style={[styles.text, {marginLeft: 20}]}>{item.title}</Text>
                            </TouchableOpacity>
                        )}
                        style={{width: '100%'}}
                    />
                }
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
        height: '60%',
        width: '100%',
        padding: 50,
        alignItems: "flex-end"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    statusButton: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10,
        width: '100%'
    },
})