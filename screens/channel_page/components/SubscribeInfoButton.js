import {TouchableOpacity, StyleSheet, Text} from "react-native";
import {useState} from "react";
import {fontStyles} from "../../../styles/font";


export const SubscribeInfoButton = () => {
    const [isSubscribed, setIsSubscribed ] = useState(true);
    const text = !isSubscribed ? "Ви підписані" : "Підписатись";
    const color= isSubscribed ? '#5A58C9' : 'transparent';

    return(
        <TouchableOpacity
            onPress={()=> setIsSubscribed(!isSubscribed)}
            style={[styles.button, {backgroundColor: color}]}
        >
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#5A58C9',
        marginHorizontal: 'auto',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    text: {
        ...fontStyles.noirProMedium,
        fontSize: 16,
    }
})