import * as React from "react";
import TabNavigation from "./TabNavigation";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {VideoPage} from "../video_page/VideoPage";
import {ChannelPage} from "../channel_page/ChannelPage";
import {CommentsModalPage} from "../comments/CommentsModalPage";
import Login from "../login/Login";
import Register from "../register/Register";
import EmailLogin from "../emailLogin/EmailLogin";
import FinishRegistration from "../finishRegister/FinishRegistration";
import {NeedAuth} from "../needAuth/NeedAuth";
import {AllSubscribes} from "../all_subscribes/AllSubscribes";
import {useDispatch, useSelector} from "react-redux";
import {CustomHeader} from "./components/CustomHeader";
import {PlayListPage} from "../playlist_page/PlayListPage";
import {PlayListSettings} from "../playlist_settings/PlayListSettings";
import {DeletePlaylist} from "../playlist_settings/DeletePlaylist";
import {EditPlayList} from "../playlist_settings/EditPlayList";
import {YouVideos} from "../you/components/YouVideos";
import AuthService from "../../services/authService";
import {useEffect} from "react";

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

    const playListTitle = useSelector(
        (state) => state.videoReducer.currentPlayListTitle
    );

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                animation: 'fade_from_bottom'
            }}>
                <Stack.Screen name={'Main'} component={TabNavigation} options={{headerShown: false}}/>
                <Stack.Screen name={'VideoPage'} component={VideoPage} options={{headerShown: false}}/>

                <Stack.Screen
                    name={'ChannelPage'}
                    component={ChannelPage}
                    options={{
                        header: ({
                                     navigation,
                                     route,
                                     options,
                                     back}) => {
                            return <CustomHeader title={channelTitle} />
                        },
                    }}
                />

                <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
                <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/>
                <Stack.Screen name="EmailLogin" component={EmailLogin} options={{headerShown: false}}/>
                <Stack.Screen name="FinishRegistration" component={FinishRegistration} options={{headerShown: false}}/>
                <Stack.Screen name="NeedAuth" component={NeedAuth} options={{headerShown: false}}/>
                <Stack.Screen name="AllSubscribes" component={AllSubscribes} options={{headerShown: false}}/>

                <Stack.Screen
                    name="CommentsModalPage"
                    component={CommentsModalPage}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />

                <Stack.Screen
                    name="PlayListPage"
                    component={PlayListPage}
                    options={{
                        header: ({
                                     navigation,
                                     route,
                                     options,
                                     back}) => {
                            return <CustomHeader title={playListTitle} route={route} />
                        },
                    }}
                />

                <Stack.Screen
                    name="YouVideos"
                    component={YouVideos}
                    options={{
                        header: ({
                                     navigation,
                                     route,
                                     options,
                                     back}) => {
                            return <CustomHeader title={playListTitle} route={route} />
                        },
                    }}
                />





                <Stack.Screen
                    name="PlayListSettings"
                    component={PlayListSettings}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />
                <Stack.Screen
                    name="DeletePlaylist"
                    component={DeletePlaylist}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />
                <Stack.Screen
                    name="EditPlayList"
                    component={EditPlayList}
                    options={{
                        headerShown: false,
                        presentation: 'transparentModal'
                    }}
                />
            </Stack.Navigator>

        </NavigationContainer>
    )
}
