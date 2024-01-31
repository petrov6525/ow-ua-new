import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {Text} from "react-native";

export default function You() {
    return (
        <MainLayout>
            <FontLoader>
                <Text style={[fontStyles.noirProRegular, {color: 'white', fontSize: 20}]}>You</Text>
            </FontLoader>
        </MainLayout>
    )
}