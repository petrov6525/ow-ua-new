import {useSelector} from "react-redux";
import {useGetAllVideoQuery} from "../../../api/video/VideoApi";
import {ActivityIndicator, SafeAreaView, Text, TouchableOpacity} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useEffect, useMemo} from "react";
import {VideoComponent} from "../../home/components/VideoComponent";


export const RecommendedVideos = ({currentVideoId}) => {
    const {data, refetch, error, isLoading} = useGetAllVideoQuery();

    const videoData = useMemo(()=>{
        if (!data) return [];
            return data.filter(item=>item.id !== currentVideoId)
    },[data]);


    useEffect(() => {
        console.log("Error: ", error);
    }, [error]);

    useEffect(() => {
        // refetch();
    }, []);


    const onPress = () => {
        refetch();
    }

    if (isLoading) {
        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <ActivityIndicator size={"large"}/>
                <Text style={fontStyles.noirProMedium}>Завантаження...</Text>
            </SafeAreaView>
        )
    }

    if (error) {
        return (
            <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={fontStyles.noirProMedium}>Виникла помилка...</Text>
                <TouchableOpacity onPress={onPress}>
                    <Text style={fontStyles.noirProBold}>Оновити</Text>
                </TouchableOpacity>
            </SafeAreaView>
        )
    }

    return(
        <>
            {videoData.map(video=> (<VideoComponent key={video.id} video={video} />))}
        </>
    )
}