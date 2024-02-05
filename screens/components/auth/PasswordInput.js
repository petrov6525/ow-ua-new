import * as React from 'react';
import {fontStyles} from "../../../styles/font";
import {StyleSheet, TextInput, TouchableOpacity, View} from "react-native";
import Icon from "react-native-vector-icons/Entypo";




export default function PasswordInput({
                                          placeholder,
                                          style,
                                          value,
                                          onChange,
                                          errorStyles,
                                          passwordValid
                                      }) {
    const [isHide, setIsHide] = React.useState(true)
    return (
        <View style={[styles.loginBox, style, !passwordValid ? errorStyles.error : '']}>
            <TextInput style={[
                styles.input,
                fontStyles.noirProRegular,
                {marginBottom: 16, color: 'white', fontSize: 14}]}
                       placeholder={placeholder} placeholderTextColor={'white'}
                       secureTextEntry={isHide}
                       value={value}
                       onChangeText={onChange}>
            </TextInput>
            <TouchableOpacity style={styles.icon} onPress={() => setIsHide(!isHide)}>
                <Icon name={!isHide ? 'eye' : 'eye-with-line'} size={25} color='white'/>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    loginBox: {
        width: '80%',
        paddingLeft: 19,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#5A58C9',
        height: 41,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        paddingBottom: 1
    },
    register: {
        position: 'absolute',
        bottom: 50,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    icon: {
        position: 'absolute',
        right: 13
    },
    input: {
        width: '100%',
        height: 41,
        position: 'absolute',
        top: -1,
        left: 19
    }
})