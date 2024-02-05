import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {fontStyles} from "../../../styles/font";


export const Details = () => {
    return(
        <TouchableOpacity style={styles.details}>
            <Text style={styles.text}>...</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    details: {
        flex: 1,
        height: 35,
        borderColor: '#5A58C9',
        borderWidth: 1,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 20,
    }
})