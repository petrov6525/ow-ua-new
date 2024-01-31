import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from "react-native";
import LayoutBlur from "../login/components/LayoutBlur";

export default function WelcomeLayout({children}) {

    return(
        <View style={{flex: 1}}>
            <LayoutBlur/>
            <StatusBar
                translucent={true}
                backgroundColor="rgba(0, 0, 0, 0)"
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