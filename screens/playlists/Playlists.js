import * as React from 'react';
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {Text} from "react-native";


export default function Playlists() {

    return (
        <MainLayout>
            <FontLoader>
                <Text style={[fontStyles.noirProRegular, {color: 'white', fontSize: 20}]}>Playlists</Text>
            </FontLoader>
        </MainLayout>
    )
}