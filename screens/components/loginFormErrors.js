import * as React from 'react';
import {Text, TouchableOpacity} from "react-native";
import {welcomeStyles} from "../../styles/welcome";
import {useDispatch, useSelector} from "react-redux";
import {clearErrors} from "../../store/slice/modal/modalSlice";
import {fontStyles} from "../../styles/font";

export default function LoginFormErrors({visible, setVisible, bottom}) {
    const errors = useSelector((state)=> state.modalReducer.errors);
    const dispatch = useDispatch();

    function handleClose() {
        dispatch(clearErrors());
        setVisible(false);
    }

    if (visible && errors.length > 0) {
        return(
            <TouchableOpacity style={[
                welcomeStyles.modalFormError,
                bottom ? {bottom: bottom} : ''
            ]}
                              onPress={handleClose}
            >
                {errors.map((error, key)=> {return(
                    <Text key={key} style={[fontStyles.noirProMedium, {color:'red', fontSize: 16}]}>{error}</Text>
                )})}
            </TouchableOpacity>
        )
    }
}