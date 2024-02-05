import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";


export const Subscribe = () => {
    return(
        <TouchableOpacity style={styles.subscribe}>
            <Text style={styles.text}>Підписатись</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subscribe: {
        width: 140,
        height: 35,
        borderColor: '#5A58C9',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 12
    }
})