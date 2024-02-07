import MainLayout from "../layouts/mainLayout";
import {View, Text} from "react-native";
import {SubscribesVertical} from "./components/SubscribesVertical";


export const AllSubscribes = () => {
    return(
        <MainLayout>
            <View style={{width: '100%'}}>
                <SubscribesVertical />
            </View>
        </MainLayout>
    )
}