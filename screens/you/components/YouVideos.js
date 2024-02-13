import MainLayout from "../../layouts/mainLayout";
import {useNavigation, useRoute} from "@react-navigation/native";
import {FlatList, SafeAreaView, ScrollView, Text} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useEffect} from "react";
import {VideoComponent} from "../../home/components/VideoComponent";


export const YouVideos = () => {
    const route = useRoute();
    const { navigate } = useNavigation();
    const {data} = route.params;


    return(
        <MainLayout>
            <SafeAreaView style={{width: '100%'}}>
                {data &&
                    <FlatList
                        data={data}
                        renderItem={({item})=> <VideoComponent video={item} />}
                    />}

            </SafeAreaView>
        </MainLayout>
    )
}