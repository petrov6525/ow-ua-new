import React, {useEffect, useMemo, useState} from "react";
import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
    ActivityIndicator,
    RefreshControl,
    StyleSheet
} from "react-native";
import {VideoComponent} from "./VideoComponent";
import {Categories} from "./Categories";
import {Search} from "./Search";
import {useSelector} from "react-redux";
import {useGetAllVideoQuery} from "../../../api/video/VideoApi";
import {fontStyles} from "../../../styles/font";

const DynamicHeader = () => {

    return (
        <View style={styles.header}>
            <Search/>
            <Categories/>
        </View>
    )
}


export const Videos = () => {
    const currentCategoryId = useSelector((state) => state.videoReducer.currentCategoryId);
    const {data, refetch, error, isLoading} = useGetAllVideoQuery();

    const videoData = useMemo(()=>{
        if (!data) return [];

        if (!currentCategoryId) {
            return data;
        }
        return data.filter(video=> video.videoCategory.id === currentCategoryId);
    },[data, currentCategoryId]);


    useEffect(() => {
        console.log("Error: ", error);
    }, [error]);

    useEffect(() => {
        // refetch();
    }, []);

    useEffect(() => {
        // console.log(currentCategoryId);
    }, [currentCategoryId]);

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

    return (
        <>
            <FlatList
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={() => refetch()}/>}
                data={videoData}
                renderItem={({item}) => <VideoComponent video={item}/>}
                showsVerticalScrollIndicator={false}
                horizontal={false} style={{width: '100%', marginBottom: 65}}
                ListHeaderComponent={() => <DynamicHeader/>}
                refreshing={true}
            />
        </>
    )
}

const styles = StyleSheet.create({
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 10,
        backgroundColor: '#0C0F14'
    }
})
