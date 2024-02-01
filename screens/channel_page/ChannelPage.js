import {Text, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MainLayout from "../layouts/mainLayout";

export const ChannelPage = () => {
    return (
        <MainLayout>
            <View>
                <Text style={fontStyles.noirProRegular}>Channel Page</Text>
            </View>
        </MainLayout>
    )
}