import {TouchableOpacity, StyleSheet, Text, ActivityIndicator} from "react-native";
import {useEffect, useMemo, useState} from "react";
import {fontStyles} from "../../../styles/font";
import {isVideoOwner} from "../../../helpers/videoInfoHelper";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {useIsSubscribedQuery, useToggleSubscribeMutation} from "../../../api/video/GradeApi";


export const SubscribeInfoButton = ({channel}) => {
    const {data, refetch, isLoading} = useIsSubscribedQuery(channel.id);
    const [toggleSubscribe, {isLoading: toggleLoading}] = useToggleSubscribeMutation();

    const isSubscribed = useMemo(() => {
        return data ?? false
    }, [data])

    const backgroundColor = isSubscribed ? '#5A58C9' : 'transparent';
    const text = isSubscribed ? "Ви підписані" : "Підписатись";

    const pressHandle = async () => {
        try {
            const result = await toggleSubscribe({
                target_user_id: channel.id
            });
            if (result) {
                refetch();
            }
        } catch (e) {
            console.log("Error:", e)
        }
    }


    return (
        <TouchableOpacity
            onPress={pressHandle}
            style={[styles.button, {backgroundColor: backgroundColor}]}
        >
            {isLoading || toggleLoading ?
                <ActivityIndicator size={"small"}/> :
                <Text style={styles.text}>{text}</Text>}
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#5A58C9',
        marginHorizontal: 'auto',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30
    },
    text: {
        ...fontStyles.noirProMedium,
        fontSize: 16,
    }
})