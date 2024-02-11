import * as React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import LayoutBlur from "../login/components/LayoutBlur";
import * as NavigationBar from 'expo-navigation-bar';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import AuthService from "../../services/authService";

export default function MainLayout({children}) {

    const dispatch = useDispatch();
    const authService = new AuthService(dispatch);
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#0C0F14');
        authService.IsAuth();
    }, []);

    return (
        <View style={{flex: 1, backgroundColor: '#10121D'}}>
            <LayoutBlur/>
            <StatusBar
                translucent={false}
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