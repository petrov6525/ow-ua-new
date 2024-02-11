import MainLayout from "../../layouts/mainLayout";
import {useNavigation, useRoute} from "@react-navigation/native";
import {SafeAreaView, ScrollView, Text} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useEffect} from "react";
import {Video} from "../../home/components/VideoComponent";


export const YouVideos = () => {
    const route = useRoute();
    const { navigate } = useNavigation();
    const videoParams = route.params;

    return(
        <MainLayout>
            <SafeAreaView style={{width: '100%'}}>
                <ScrollView
                    scrollEventThrottle={5}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                >
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                    <Video/>
                </ScrollView>
            </SafeAreaView>
        </MainLayout>
    )
}