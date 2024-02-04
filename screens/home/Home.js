import * as React from "react";
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {Videos} from "./components/Videos";
import {View} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import {useEffect} from "react";


export default function Home() {
    return(
        <MainLayout>
            <FontLoader>
                    <Videos />
            </FontLoader>
        </MainLayout>
    )
}