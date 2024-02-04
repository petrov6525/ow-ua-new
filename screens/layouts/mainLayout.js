import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import LayoutBlur from "../login/components/LayoutBlur";
import * as NavigationBar from 'expo-navigation-bar';
import {useEffect} from "react";
import {rgbaColor} from "@shopify/react-native-skia";

export default function MainLayout({children}) {

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#0C0F14');
    }, []);

    return(
        <View style={{flex: 1, backgroundColor: '#10121D'}}>
            <LayoutBlur/>
            <StatusBar
                translucent={false}
                // backgroundColor="rgba(0, 0, 0, 0)"
                backgroundColor="black"
                barStyle="light-content"
            />
            <SafeAreaView style={styles.container}>
                {children}
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },
});