import * as React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Home from "../home/Home";
import Subscribes from "../subscribes/Subscribes";
import Playlists from "../playlists/Playlists";
import You from "../you/You";

const Tab = createBottomTabNavigator();


export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: true,
            headerShown: false,
            tabBarActiveTintColor: '#5A58C9',
            activeColor: '#5A58C9',
            tabBarStyle: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: "#0C0F14",
                height: 65,
                borderWidth: 0,
                borderColor: 'transparent',
                paddingBottom: 15,
                paddingTop: 10
            },
            animation: 'fade_from_bottom'
        }}>
            <Tab.Screen name="Home" component={Home}
                        options={{
                            tabBarLabel: "Головна",
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="home" color={focused ? '#5A58C9' : 'rgba(255,255,255,0.8)'} size={30}/>
                            )
                        }}

            />

            <Tab.Screen name="Subscribes" component={Subscribes}
                        options={{
                            tabBarLabel: "Підписки",
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons
                                    name="youtube-subscription" color={focused ? '#5A58C9' : 'rgba(255,255,255,0.8)'} size={26}/>
                            )
                        }}
            />

            <Tab.Screen name="Playlists" component={Playlists}
                        options={{
                            tabBarLabel: "Плейлісти",
                            tabBarIcon: ({focused}) => (
                                <MaterialCommunityIcons name="playlist-play" color={focused ? '#5A58C9' : 'rgba(255,255,255,0.8)'}
                                                        size={30}/>
                            )
                        }}
            />
            <Tab.Screen name="You" component={You}
                        options={{
                            tabBarLabel: "Ви",
                            tabBarIcon: ({focused}) => (
                                <MaterialIcons name="person-pin" color={focused ? '#5A58C9' : 'rgba(255,255,255,0.8)'} size={30}/>
                            )
                        }}
            />
        </Tab.Navigator>
    )
}
