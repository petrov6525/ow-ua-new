import * as React from 'react';
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";
import {Text} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";


export default function Playlists() {
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути плейлісти"} />
        )
    }

    return (
        <MainLayout>
            <FontLoader>
                <Text style={[fontStyles.noirProRegular, {color: 'white', fontSize: 20}]}>Playlists</Text>
            </FontLoader>
        </MainLayout>
    )
}