import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useSelector} from "react-redux";

export default function WelcomeFormButton({text, onSubmit}) {
    const isRequest = useSelector((state)=> state.authReducer.isRequest);

    return(
        <TouchableOpacity style={[styles.button,
            isRequest ? styles.request : ''
        ]} onPress={onSubmit}>
            <Text style={[fontStyles.noirProMedium,{
                color: 'white',
                fontSize: 16
            }]}>{text}</Text>

        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#5A58C9',
        borderRadius: 8
    },
    request: {
        opacity: 0.5
    }
})