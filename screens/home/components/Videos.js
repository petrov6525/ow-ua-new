import React, {useRef} from "react";
import {Animated, ScrollView, StyleSheet, Text, View} from "react-native";
import {Video} from "./Video";
import {Categories} from "./Categories";
import {Search} from "./Search";
import {interpolate} from "@shopify/react-native-skia";

const HEADER_MAX_TOP = 0;
const HEADER_MIN_TOP = -100;
const SCROLL_DISTANCE = HEADER_MAX_TOP - HEADER_MIN_TOP;

const HEADER_MAX_HEIGHT = 100;
const HEADER_MIN_HEIGHT = 0;
const SCROLL_DISTANCE_HEIGHT = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

const DynamicHeader = ({value}) => {
    const animatedHeaderTop = value.interpolate({
        inputRange: [0, SCROLL_DISTANCE],
        outputRange: [HEADER_MAX_TOP, HEADER_MIN_TOP],
        extrapolate: 'clamp',
    })

    const animatedHeaderHeight = value.interpolate({
        inputRange: [0, SCROLL_DISTANCE_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp',
    })


    return(
        <Animated.View style={[styles.header,{top: animatedHeaderTop, height: 100}]}>
            <Search />
            <Categories />
        </Animated.View>
    )
}


    export const Videos = () => {
        const scrollOffsetY = useRef(new Animated.Value(0)).current;
    return(
           <>
               <DynamicHeader value={scrollOffsetY} />
               <ScrollView
                   scrollEventThrottle={5}
                   showsVerticalScrollIndicator={false}
                   horizontal={false} style={{width: '100%', marginBottom: 65}}
                   onScroll={Animated.event([
                       {nativeEvent: {contentOffset: {y: scrollOffsetY}}}], {useNativeDriver: false})}
               >
                   <Video style={{marginTop: 100}}  />
                   <Video />
                   <Video />
                   <Video />
                   <Video />
                   <Video />
                   <Video />
                   <Video />
                   <Video />
               </ScrollView>
           </>
    )
}


const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        zIndex: 10,
        backgroundColor: 'transparent',
    }
})
