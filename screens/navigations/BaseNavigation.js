import * as React from "react";
import TabNavigation from "./TabNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { createStackNavigator } from '@react-navigation/stack';
import {VideoPage} from "../video_page/VideoPage";
import {ChannelPage} from "../channel_page/ChannelPage";
import {CommentsModalPage} from "../comments/CommentsModalPage";
import Login from "../login/Login";
import Register from "../register/Register";
import EmailLogin from "../emailLogin/EmailLogin";
import FinishRegistration from "../finishRegister/FinishRegistration";
import {NeedAuth} from "../needAuth/NeedAuth";
import {AllSubscribes} from "../all_subscribes/AllSubscribes";
import {useSelector} from "react-redux";
import {fontStyles} from "../../styles/font";


// const Stack = createStackNavigator();
const Stack = createNativeStackNavigator();

const config = {
    animation: 'spring',
    config: {
        stiffness: 1000,
        damping: 500,
        mass: 3,
        overshootClamping: true,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 0.01,
    },
};

export default function BaseNavigation() {
    const channelTitle = useSelector(
        (state) => state.videoReducer.currentChannelTitle
    );
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                animation: 'fade_from_bottom'
            }}>
                <Stack.Screen name={'Main'} component={TabNavigation} options={{headerShown: false}}/>
                <Stack.Screen name={'VideoPage'} component={VideoPage} options={{headerShown: false}} />

                <Stack.Screen
                    name={'ChannelPage'}
                    component={ChannelPage}
                    options={{
                        headerShown: true,
                        title: channelTitle,
                        headerStyle: {backgroundColor: '#0C0F14', color: 'white' }
                    }}
                />

                <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="EmailLogin" component={EmailLogin} options={{headerShown: false}}/>
                <Stack.Screen name="FinishRegistration" component={FinishRegistration} options={{headerShown: false}}/>
                <Stack.Screen name="NeedAuth" component={NeedAuth} options={{headerShown: false}}/>
                <Stack.Screen name="AllSubscribes" component={AllSubscribes} options={{headerShown: false}}/>
            </Stack.Navigator>

        </NavigationContainer>
    )
}
