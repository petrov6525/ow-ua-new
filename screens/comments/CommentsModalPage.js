import {BackHandler, Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import * as NavigationBar from "expo-navigation-bar";


export const CommentsModalPage = () => {
    const {navigate, goBack} = useNavigation();

    useEffect(() => {
        console.log("Effect");
        NavigationBar.setBackgroundColorAsync('#0C0F14');
    }, []);

    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={fontStyles.noirProRegular}>Это ваше модальное окно!</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: 'red',
        padding: 20,
        borderRadius: 10,
        height: '80%', // 80% от высоты экрана
        width: '50%', // 50% от ширины экрана
    },
})