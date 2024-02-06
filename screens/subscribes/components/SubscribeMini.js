import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {sub} from "@shopify/react-native-skia";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";


export const SubscribeMini = ({subscribe}) => {
    const { navigate } = useNavigation();
    const handleTouch = () => {
        navigate('ChannelPage');
    }

    return(
        <View
            style={styles.view}
            onTouchEnd={handleTouch}
        >
            <Text style={styles.titleText}>{subscribe.channelName}</Text>
            <Image
                source={require('../../../assets/channel_profile_logo.png')}
                style={{width: 75, height: 75, marginRight: 20}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 75,
        marginLeft: 5,
   },
    titleText: {
        ...fontStyles.noirProRegular,
        fontSize: 13,
        color: '#87888C',
        width: 75,
        overflow: "hidden",
        height: 17,
        marginBottom: 5,
        paddingLeft: 10
    }
})