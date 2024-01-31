import {StyleSheet} from "react-native";


export const welcomeStyles = StyleSheet.create({
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
        gap: 16.8,
        paddingBottom: 1
    },
    modalFormError: {
        width: '90%',
        position: 'absolute',
        bottom: 25,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'red',
        borderStyle: 'solid',
        padding: 15
    },
    modalCloseButton: {
        position: 'absolute',
        top: 5,
        right: 5
    }
})