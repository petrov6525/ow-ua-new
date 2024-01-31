import * as React from "react";
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {Videos} from "./components/Videos";
import {View} from "react-native";


export default function Home() {
    return(
        <MainLayout>
            <FontLoader>
                    <Videos />
            </FontLoader>
        </MainLayout>
    )
}