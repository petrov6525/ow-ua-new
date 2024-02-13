import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";


export const SubscribeMini = ({subscribe}) => {
    const navigation = useNavigation();
    const handleTouch = () => {
        navigation.navigate('ChannelPage', {channel: subscribe});
    }

    return(
        <View
            style={styles.view}
            onTouchEnd={handleTouch}
        >
            <Text style={styles.titleText}>{subscribe.displayName}</Text>
            <Image
                source={{uri: subscribe.photoUrl}}
                style={{width: 75, height: 75, marginRight: 20, borderRadius: 50}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        width: 75,
        marginHorizontal: 10,
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