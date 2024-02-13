import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {fontStyles} from "../../styles/font";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setCurrentPlayListTitle} from "../../store/slice/videoSlice";
import MainLayout from "../layouts/mainLayout";
import {VideoComponent} from "../home/components/VideoComponent";
import {useRoute} from "@react-navigation/native";
import {useGetAllPlaylistVideoQuery} from "../../api/video/VideoApi";


export const PlayListPage = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const {playlist} = route.params;
    const {data, refetch, isLoading} = useGetAllPlaylistVideoQuery(playlist.id);

    useEffect(() => {
        dispatch(setCurrentPlayListTitle(playlist.title))
        refetch();
    }, []);
    return(
        <MainLayout>
            <SafeAreaView style={{width: '100%'}}>
                {isLoading && <ActivityIndicator size={"large"} />}
                {data &&
                    <FlatList
                        data={data}
                        refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()}/>}
                        renderItem={({item}) => <VideoComponent video={item} />}
                        refreshing={true}
                        style={{height: '100%'}}
                    />}

                    {/*<VideoComponent/>*/}
            </SafeAreaView>
        </MainLayout>
    )
}