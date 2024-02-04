import {TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useEffect, useRef, useState} from "react";


export const CommentForm = ({visible, setVisible}) => {
    const inputRef = useRef(null);
    const [isFocus, setIsFocus] = useState(false);

    useEffect(() => {
        if (isFocus && inputRef.current) {
            inputRef.current.focus();
        } else {
            inputRef.current.blur();
        }
    }, [isFocus]);

    useEffect(() => {
        setIsFocus(visible);
    }, [visible, setIsFocus]);


    return (
        <View style={[styles.box,{height: visible ? 'auto' : 0, opacity: visible ? 1 : 0}]}>
            <TextInput style={styles.input} multiline={true} focusable={true} autoFocus={isFocus}
                    ref={inputRef}
            >

            </TextInput>
            <View style={styles.arrowBox}>
                <TouchableOpacity style={styles.arrow} onPress={()=> setVisible(!visible)}>
                    <MaterialCommunityIcons name="arch" color={'rgba(255,255,255,0.8)'} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100%',
        position: 'absolute',
        top: 130,
        flexDirection: 'row',
        zIndex: 100,
        flex: 1,
        maxHeight: 100
    },
    input: {
        // height: 50,
        padding: 10,
        borderRadius: 15,
        borderColor: '#5A58C9',
        borderWidth: 1,
        borderStyle: "solid",
        width: '100%',
        position: 'relative',
        color: 'white',
        // zIndex: 15,
        backgroundColor: '#0C0F14',
        paddingRight: 40,
        paddingLeft: 20
    },
    arrow: {
        transform: [{rotate: '90deg'}]
    },
    arrowBox: {
        justifyContent: "flex-end",
        position: "relative",
        top: 0,
        right: 40,
        paddingBottom: 7
    }
})