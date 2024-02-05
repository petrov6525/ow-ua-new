import React from "react";
import { ScrollView, View} from "react-native";
import {Video} from "./Video";
import {Categories} from "./Categories";
import {Search} from "./Search";
const DynamicHeader = () => {

    return (
        <View style={{backgroundColor: '#0C0F14'}}>
            <Search/>
            <Categories/>
        </View>
    )
}


export const Videos = () => {
    return (
        <>
            <ScrollView
                scrollEventThrottle={5}
                showsVerticalScrollIndicator={false}
                horizontal={false} style={{width: '100%', marginBottom: 65}}
                stickyHeaderHiddenOnScroll={true}
                stickyHeaderIndices={[0]}
            >
                <DynamicHeader />
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
        </>
    )
}
