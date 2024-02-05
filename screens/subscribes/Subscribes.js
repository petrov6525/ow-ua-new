import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {Text} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {NeedAuth} from "../needAuth/NeedAuth";


export default function Subscribes() {
    const { navigate } = useNavigation();
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );



    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути підписки"} />
        )
    }

    return (
        <MainLayout>
            <FontLoader>
                <Text style={[fontStyles.noirProRegular, {color: 'white', fontSize: 20}]}>Subscribes</Text>
            </FontLoader>
        </MainLayout>
    )
}