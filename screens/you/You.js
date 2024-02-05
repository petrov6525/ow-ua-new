import * as React from 'react';
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {fontStyles} from "../../styles/font";
import {Text} from "react-native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";

export default function You() {
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб переглянути інформацію профілю"} />
        )
    }
    return (
        <MainLayout>
            <FontLoader>
                <Text style={[fontStyles.noirProRegular, {color: 'white', fontSize: 20}]}>You</Text>
            </FontLoader>
        </MainLayout>
    )
}