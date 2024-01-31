import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function FontLoader({ children }) {
    const fontLoaded = useFonts({
        'noir-pro-bold': require('../../../assets/fonts/NoirPro-Bold.ttf'),
        'noir-pro-regular': require('../../../assets/fonts/NoirPro-Regular.ttf'),
        'noir-pro-medium': require('../../../assets/fonts/NoirPro-Medium.ttf'),
        'noir-pro-heavy': require('../../../assets/fonts/NoirPro-Heavy.ttf'),
    });

    if (!fontLoaded) {
        return <ActivityIndicator />;
    }

    return children;
};

