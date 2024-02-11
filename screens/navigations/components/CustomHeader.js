import {Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";


export const CustomHeader = ({title, route}) => {
    const navigation = useNavigation();
    const params = route.params;


    return(
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#0C0F14',
            height: 50,
            alignItems: 'center'
        }}>
            <TouchableOpacity
                style={{marginRight: 10, marginLeft: 10}}
                onPress={()=>navigation.goBack()}
            >
                <MaterialCommunityIcons
                    name="arrow-left"
                    color={'rgba(255,255,255,0.5)'}
                    size={30}
                />
            </TouchableOpacity>
            <Text style={[fontStyles.noirProMedium, {fontSize: 20, color: 'rgba(255,255,255,0.5)'}]}>{params?.title ?? title}</Text>
        </View>
    )
}