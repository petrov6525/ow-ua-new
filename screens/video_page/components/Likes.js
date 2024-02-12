import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import {fontStyles} from "../../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";
import {NeedAuth} from "../../needAuth/NeedAuth";
import {
    useGetDisLikesQuery,
    useGetLikesQuery,
    useIsDisLikedQuery,
    useIsLikedQuery, useSendDisLikeMutation,
    useSendLikeMutation
} from "../../../api/video/GradeApi";
import {useEffect, useMemo, useState} from "react";
import asyncStorageService from "../../../services/asyncStorageService";
import {axiosInstance as axios} from "../../../routing/axios";


export const Likes = ({videoId}) => {
    const { navigate } = useNavigation();
    const isAuth = useSelector((state) => state.authReducer.isAuth);
    const {data: likes, refetch: likesRefetch} = useGetLikesQuery(videoId);
    const {data: dislikes, refetch: dislikesRefetch} = useGetDisLikesQuery(videoId);
    const {refetch: getIsLiked, data: isLikedData} = useIsLikedQuery(videoId);
    const {refetch: getIsDisLiked, data: isDisLikedData} = useIsDisLikedQuery(videoId);
    const [sendLike, {isLoading: isLikeRequest}] = useSendLikeMutation();
    const [sendDislike] = useSendDisLikeMutation();

    const isLiked = useMemo(()=>{return isLikedData ?? false},[isLikedData]);
    const isDisLiked = useMemo(()=>{return isDisLikedData ?? false},[isDisLikedData]);

    const likeCount = useMemo(()=>{return likes ?? 0},[likes]);
    const disLikeCount = useMemo(()=>{return dislikes ?? 0},[dislikes]);



    const refresh = async () => {
        await likesRefetch();
        await dislikesRefetch();
        await getIsLiked();
        await getIsDisLiked();
    }

    const likeHandle = async () => {
        pressHandle();

        if (isLikeRequest) return;

        const result = await sendLike({
            grade_id: 1,
            video_id: videoId
        })

        if (!result) {
            return;
        }
        await refresh();
    }

    const disLikeHandle = async () => {
        pressHandle();



        const result = await sendDislike({
            grade_id: 2,
            video_id: videoId
        })

        if (!result) {
            return;
        }
        await refresh();
    }

    const pressHandle = () => {
        if (!isAuth) {
            navigate('NeedAuth', {text: "Авторизуйтесь щоб поставити оцінку відео"})
        }
    }
    return (
        <View style={styles.div}>
            <View>
                <TouchableOpacity style={[styles.like, {backgroundColor: isLiked ? '#5A58C9' : 'transparent'}]} onPress={likeHandle}>
                    <Image source={require('../../../assets/icons/like.png')} style={{width: 20, height: 17}}/>
                </TouchableOpacity>
                <Text style={styles.text}>{likeCount}</Text>
            </View>

            <View>
                <TouchableOpacity style={[styles.dislike,  {backgroundColor: isDisLiked ? '#5A58C9' : 'transparent'}]} onPress={disLikeHandle}>
                    <Image source={require('../../../assets/icons/dislike.png')} style={{width: 20, height: 17}}/>
                </TouchableOpacity>
                <Text style={styles.text}>{disLikeCount}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        flexDirection: 'row',
        display: 'flex',
        marginRight: 10
    },
    like: {
        borderColor: '#5A58C9',
        borderWidth: 1,
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginRight: 1
    },
    dislike: {
        borderColor: '#5A58C9',
        borderWidth: 1,
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginRight: 1
    },
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 11,
        textAlign: 'center',
        marginTop: 2,
        color: '#87888C',
    }
})