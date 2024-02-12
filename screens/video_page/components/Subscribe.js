import {Text, TouchableOpacity, StyleSheet, ActivityIndicator} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useEffect, useMemo} from "react";
import {useIsSubscribedQuery, useToggleSubscribeMutation} from "../../../api/video/GradeApi";


export const Subscribe = ({targetUserId}) => {
    const { navigate } = useNavigation();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const {data, refetch, isLoading} = useIsSubscribedQuery(targetUserId);
    const [toggleSubscribe, {isLoading: toggleLoading}] = useToggleSubscribeMutation();

    const isSubscribed = useMemo(()=>{return data ?? false},[data])

    const backgroundColor = isSubscribed ? '#5A58C9' : 'transparent';
    const text = isSubscribed ? "Ви підписані" : "Підписатись";

    const pressHandle = async () => {
        try {
            const result = await toggleSubscribe({
                target_user_id: targetUserId
            });
            if (result) {
                refetch();
            }
        } catch (e) {
            console.log("Error:", e)
        }
    }
    return(
        <TouchableOpacity style={[styles.subscribe,{backgroundColor: backgroundColor}]} onPress={pressHandle}>
            {isLoading || toggleLoading ?
            <ActivityIndicator size={"small"} /> :
            <Text style={styles.text}>{text}</Text>}
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