import {Image, Text, View, StyleSheet, ScrollView, BackHandler} from "react-native";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {Banner} from "./components/Banner";
import {Navigation} from "./components/Navigation";
import {SubscribeInfoButton} from "./components/SubscribeInfoButton";
import {useEffect, useState} from "react";
import {Pages} from "./components/Pages";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setCurrentChannelTitle} from "../../store/slice/videoSlice";

export const ChannelPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation  = useNavigation();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setCurrentChannelTitle("Channel Title jkdzdi"));
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backPressHandler
        )

        return () => {
            backHandler.remove();
        }
    }, []);

    const backPressHandler = () => {
        // navigation.navigate('Main');
    }

    return (
        <MainLayout>
            <ScrollView
                style={{flex: 1, width: '100%'}}
                stickyHeaderHiddenOnScroll={true}
                stickyHeaderIndices={[2]}
            >
                <Banner />
                <SubscribeInfoButton />
                <Navigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <Pages index={activeIndex} />
            </ScrollView>

        </MainLayout>
    )
}