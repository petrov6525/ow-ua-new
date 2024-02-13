import {ActivityIndicator, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {Video, VideoComponent} from "../../home/components/VideoComponent";
import {ChannelVideo} from "./ChannelVideo";
import {useGetAllUserVideoQuery} from "../../../api/video/VideoApi";
import {useEffect} from "react";


export const VideosPage = ({userId}) => {
    const {data, isLoading} = useGetAllUserVideoQuery(userId);

    return(
        <View>
            {isLoading && <ActivityIndicator size={"large"} />}
            {data && data.map(video=>(<VideoComponent key={video.id} video={video} />))}
        </View>
    )
}