import {Image, View} from "react-native";


export const LogoCenter = () => {
    return(
        <View>
            <Image
                source={require('../../assets/logo.png')}
                style={{width: 153, height: 32}}
            />
        </View>
    )
}