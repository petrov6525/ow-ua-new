import {SafeAreaView, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setCurrentPlayListTitle} from "../../store/slice/videoSlice";
import MainLayout from "../layouts/mainLayout";
import {Video} from "../home/components/VideoComponent";


export const PlayListPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setCurrentPlayListTitle('PlayList Title'))
    }, []);
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