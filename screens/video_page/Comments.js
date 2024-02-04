import {Button, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {CommentForm} from "./CommentForm";
import {useState} from "react";
import {ModalLayout} from "../layouts/ModalLayout";
import {useNavigation} from "@react-navigation/native";
import {CommentsModalPage} from "../comments/CommentsModalPage";
import * as NavigationBar from "expo-navigation-bar";


const comment = {
    text: "This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched!"
}


export const Comments = () => {
    const CommentEditButton = ({visible}) => {
        if (visible) {
            return(
                <TouchableOpacity style={styles.commentButton}
                                  onPress={()=> setCommentFormVisible(!commentFormVisible)}
                >
                    <MaterialCommunityIcons name="comment-edit-outline" color={'rgba(255,255,255,0.8)'} size={20}/>
                </TouchableOpacity>
            )
        }
    }

    const [commentFormVisible, setCommentFormVisible] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const { navigate } = useNavigation();
    const handleCommentsPress = () => {
        console.log("Press");
        // navigate('CommentsModalPage');
        setModalVisible(true);
    }

    return (
        <>
            <ModalLayout>
                <Modal
                    visible={modalVisible}
                    transparent={true}
                    animationType={'slide'}
                    onRequestClose={()=>{setModalVisible(false)}}
                    hardwareAccelerated={true}
                    onShow={async () => {
                        await NavigationBar.setBackgroundColorAsync('#0C0F14');
                        console.log("Modal callback");
                    }}
                >
                    <CommentsModalPage />
                </Modal>
            </ModalLayout>

            <CommentForm visible={commentFormVisible} setVisible={setCommentFormVisible}/>
            <TouchableOpacity style={styles.container}
                              onPress={handleCommentsPress}
            >
                <View style={styles.commentHeader}>
                        <Text style={styles.text}>Коментарі <Text style={styles.commentsCount}>1,2 тис.</Text></Text>
                    {/*<CommentEditButton visible={isCollapsed} />*/}
                </View>
                {/*<ScrollView
                    style={isCollapsed ? styles.scrollViewCollapsed : styles.scrollViewDefault}
                    scrollEnabled={true}
                >
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                    <Comment comment={comment}/>
                </ScrollView>*/}
            </TouchableOpacity>
        </>
    )
}

const Comment = ({comment}) => {
    return (
        <View style={styles.comment}>
            <Image source={require('../../assets/channel_profile_logo.png')}
                   style={{width: 50, height: 50, marginRight: 10}}/>
            <Text style={styles.commentText}>{comment.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
        borderRadius: 15,
        borderColor: '#5A58C9',
        borderWidth: 1,
    },
    text: {
        ...fontStyles.noirProMedium,
        marginBottom: 20
    },
    commentsCount: {
        color: '#87898E'
    },
    comment: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20,
        marginRight: 20,
        paddingRight: 20
    },
    commentText: {
        ...fontStyles.noirProRegular,
        marginRight: 20
    },
    scrollViewDefault: {
        paddingRight: 20,
        height: 35
    },
    scrollViewCollapsed: {
        paddingRight: 20,
    },
    commentHeader: {
        flexDirection: 'row',
        alignItems: "flex-start",
        justifyContent: "space-between",
        paddingRight: 20
    },
    commentButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5A58C9',
        borderRadius: 15,
        width: 60,
        height: 25
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        height: '80%', // 80% от высоты экрана
        width: '50%', // 50% от ширины экрана
    },
})