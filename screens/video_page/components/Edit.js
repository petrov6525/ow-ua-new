import {Text, TouchableOpacity, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";


export const Edit = () => {
    const { navigate } = useNavigation();
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    const pressHandle = () => {
        if (!isAuth) {
            navigate('NeedAuth', {text: "Авторизуйтесь щоб поставити оцінку відео"})
        }
    }
    return(
        <TouchableOpacity style={styles.subscribe} onPress={pressHandle}>
            <Text style={styles.text}>Редагувати</Text>
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