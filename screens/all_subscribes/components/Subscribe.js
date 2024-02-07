import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";


export const Subscribe = ({subscribe}) => {
    const { navigate } = useNavigation();
    const handleTouch = () => {
        navigate('ChannelPage');
    }

    return(
        <View
            style={styles.view}
            onTouchEnd={handleTouch}
        >
            <Image
                source={require('../../../assets/channel_profile_logo.png')}
                style={{width:70, height: 70}}
            />
            <Text style={styles.titleText}>{subscribe.channelName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7.5,
        marginTop: 7.5
   },
    titleText: {
        ...fontStyles.noirProRegular,
        fontSize: 16,
        marginLeft: 10
    }
})