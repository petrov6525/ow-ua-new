import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useState} from "react";
import {CommentsModalPage} from "../../comments/CommentsModalPage";


export const Comments = () => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <CommentsModalPage modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <TouchableOpacity style={styles.container}
                              onPress={()=>{setModalVisible(true)}}
            >
                <View style={styles.commentHeader}>
                        <Text style={styles.text}>Коментарі <Text style={styles.commentsCount}>1,2 тис.</Text></Text>
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