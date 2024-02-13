import {Image, Text, View, StyleSheet, ScrollView, BackHandler} from "react-native";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {Banner} from "./components/Banner";
import {Navigation} from "./components/Navigation";
import {SubscribeInfoButton} from "./components/SubscribeInfoButton";
import {useEffect, useState} from "react";
import {Pages} from "./components/Pages";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {setCurrentChannelTitle} from "../../store/slice/videoSlice";
import {isVideoOwner} from "../../helpers/videoInfoHelper";

export const ChannelPage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigation  = useNavigation();
    const dispatch = useDispatch();
    const route = useRoute();
    const {channel} = route.params;
    const [isOwner,setIsOwner] = useState(false);

    useEffect(() => {
        getOwner(channel);
    }, []);

    const getOwner = async (user) => {
        const res = await isVideoOwner(user);
        setIsOwner(res);
    }


    useEffect(() => {
        dispatch(setCurrentChannelTitle(channel.displayName));
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
                <Banner channel={channel} />
                {!isOwner && <SubscribeInfoButton channel={channel} />}
                <Navigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                <Pages index={activeIndex} userId={channel.id} />
            </ScrollView>

        </MainLayout>
    )
}