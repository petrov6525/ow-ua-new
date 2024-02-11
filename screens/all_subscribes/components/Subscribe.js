import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";


export const Subscribe = ({subscribe}) => {
    const {navigate} = useNavigation();
    const [isSubscribe, setIsSubscribe] = useState(true);
    const text = isSubscribe ? "Відписатись" : "Підписатись";
    const color= isSubscribe ? 'transparent' : '#5A58C9';
    const handleTouch = () => {
        navigate('ChannelPage');
    }

    return (
        <View
            style={styles.view}
        >
            <TouchableOpacity onPress={handleTouch}>
                <Image
                    source={require('../../../assets/channel_profile_logo.png')}
                    style={{width: 70, height: 70}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleTouch}
                style={{flex: 1, marginLeft: 10}}
            >
                <Text style={styles.titleText}>{subscribe.channelName}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={()=>setIsSubscribe(!isSubscribe)}>
                <Text style={styles.titleText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    titleText: {
        ...fontStyles.noirProRegular,
        fontSize: 16,
    },
    button: {
        // backgroundColor: 'red',
        marginLeft: 20,
        borderColor: '#5A58C9',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 2
    }
})