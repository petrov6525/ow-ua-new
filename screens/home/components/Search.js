import {Image, TextInput, TouchableOpacity, View} from "react-native";
import {StyleSheet} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import React, {useRef} from 'react';

export const Search = () => {
    const [isFocus, setIsFocus] = React.useState(false);
    const inputRef = useRef(null);

    const top = isFocus ? 0 : -50;

    const toggleFocus = () => {
        setIsFocus(!isFocus);
        if (!inputRef.current) return;

        if (!isFocus) inputRef.current.focus()
        else inputRef.current.blur();
    }
    return(
        <View style={styles.main}>
            <TouchableOpacity style={[styles.logo]}>
                <Image source={require("../../../assets/logo.png")}
                       style={{width: 150, height: 30}}
                />
            </TouchableOpacity>
            <TextInput style={[styles.input, {top: top}]} focusable={true} autoFocus={isFocus}
                       ref={inputRef}
            >

            </TextInput>
            <TouchableOpacity onPress={toggleFocus} style={styles.icon}>
                <MaterialIcons name='search' color={'white'} size={30}/>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
       // height: 50,
        padding: 10,
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        borderStyle: "solid",
        width: '100%',
        position: 'relative',
        color: 'white',
        // zIndex: 15,
        backgroundColor: '#0C0F14'
    },
    main: {
        width: '100%',
        top: 0,
        left: 0,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: "relative"
    },
    icon: {
        position: "absolute",
        right: 5
    },
    logo: {
        position: 'absolute',
        left: 25
    }
})