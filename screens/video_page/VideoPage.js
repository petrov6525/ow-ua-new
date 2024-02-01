import MainLayout from "../layouts/mainLayout";
import {Text, View} from "react-native";
import {fontStyles} from "../../styles/font";
import { useRoute } from '@react-navigation/native';


export const VideoPage = () => {
    const route = useRoute();
    const { video } = route.params;
    console.log(video);
    return(
        <MainLayout>
            <View>
                <Text style={fontStyles.noirProRegular}>Video Page</Text>
            </View>
        </MainLayout>
    )
}