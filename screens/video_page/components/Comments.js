import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useEffect, useState} from "react";
import {CommentsModalPage} from "../../comments/CommentsModalPage";
import {useNavigation} from "@react-navigation/native";
import {useGetCommentsQuery} from "../../../api/video/GradeApi";


export const Comments = ({videoId}) => {
    const navigation = useNavigation();
    const {data, refetch} = useGetCommentsQuery(videoId);
    const count = data?.length ?? 0;

    useEffect(() => {
        refetch();
    }, []);

    return (
        <>
            <TouchableOpacity style={styles.container}
                              onPress={()=>navigation.navigate('CommentsModalPage', {videoId: videoId})}
            >
                <View style={styles.commentHeader}>
                        <Text style={styles.text}>Коментарі <Text style={styles.commentsCount}>{count}</Text></Text>
                </View>
            </TouchableOpacity>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 12,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 15,
        borderColor: '#5A58C9',
        borderWidth: 1,
    },
    text: {
        ...fontStyles.noirProMedium,
    },
    commentsCount: {
        color: '#87898E'
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingRight: 20
    }
})