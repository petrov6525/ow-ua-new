import {TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {useEffect, useRef, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useAddCommentMutation} from "../../../api/video/GradeApi";


export const CommentForm = ({onPress, videoId}) => {
    const inputRef = useRef(null);
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const [text, setText] = useState("");

    const [addComment] = useAddCommentMutation();

    const handleSend = async () => {
        if (text.trim() === "") return;
        try {
            await addComment({
                text: text,
                video_id: videoId
            }).unwrap();
            setText("");
        } catch (e) {
            console.log("Error: ", e.getMessage());
        }
    }

    return (
        <View style={styles.box}>
            {isAuth ? <TextInput
                    style={styles.input}
                    multiline={true}
                    focusable={true}
                    autoFocus={false}
                    ref={inputRef}
                    value={text}
                    onChangeText={(text)=>setText(text)}
            >

            </TextInput>
            : <TouchableOpacity onPress={onPress} style={styles.input}>

                </TouchableOpacity>
            }

            <View style={styles.arrowBox}>
                <TouchableOpacity style={styles.arrow} onPress={handleSend} >
                    <MaterialCommunityIcons name="arch" color={'rgba(255,255,255,0.8)'} size={30} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        zIndex: 100,
    },
    input: {
        height: 50,
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