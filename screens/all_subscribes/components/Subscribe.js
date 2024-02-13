import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useMemo, useState} from "react";
import {useIsSubscribedQuery, useToggleSubscribeMutation} from "../../../api/video/GradeApi";


export const Subscribe = ({subscribe}) => {
    const {navigate} = useNavigation();
    const {data, refetch, isLoading} = useIsSubscribedQuery(subscribe.id);
    const [toggleSubscribe, {isLoading: toggleLoading}] = useToggleSubscribeMutation();

    const isSubscribed = useMemo(()=>{return data ?? false},[data])

    const backgroundColor = isSubscribed ? '#5A58C9' : 'transparent';
    const text = isSubscribed ? "Відписатись" : "Підписатись";

    const pressHandle = async () => {
        try {
            const result = await toggleSubscribe({
                target_user_id: subscribe.id
            });
            if (result) {
                refetch();
            }
        } catch (e) {
            console.log("Error:", e)
        }
    }


    const handleTouch = () => {
        navigate('ChannelPage', {channel: subscribe});
    }

    return (
        <View
            style={styles.view}
        >
            <TouchableOpacity onPress={handleTouch}>
                <Image
                    source={{uri: subscribe.photoUrl}}
                    style={{width: 70, height: 70, borderRadius: 50}}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={handleTouch}
                style={{flex: 1, marginLeft: 10}}
            >
                <Text style={styles.titleText}>{subscribe.displayName}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor}]} onPress={pressHandle}>
                <Text style={styles.titleText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        marginTop: 15
    },
    titleText: {
        ...fontStyles.noirProRegular,
        fontSize: 16,
    },
    button: {
        // backgroundColor: 'red',
        marginLeft: 20,
        borderColor: '#5A58C9',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingBottom: 2
    }
})