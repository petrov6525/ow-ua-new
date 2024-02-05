import {
    BackHandler,
    Button, Image,
    Modal,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import {fontStyles} from "../../styles/font";
import {useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import * as NavigationBar from "expo-navigation-bar";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {CommentEditButton} from "./components/CommentEditButton";
import {Comment} from "./components/Comment";
import {CommentForm} from "./components/CommentForm";
import {useSelector} from "react-redux";



const comment = {
    text: "This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched!"
}
export const CommentsModalPage = ({modalVisible, setModalVisible}) => {
    const {navigate, goBack} = useNavigation();
    const isAuth = useSelector(
        (state) => state.authReducer.isAuth
    );

    const focusHandle = () => {
        if (!isAuth) {
            setModalVisible(false);
            navigate('NeedAuth', {text: "Авторизуйтесь щоб поставити оцінку відео"})
        }
    }

    return (
        <Modal
            visible={modalVisible}
            transparent={true}
            animationType={'slide'}
            onRequestClose={() => {
                setModalVisible(false)
            }}
            hardwareAccelerated={true}
        >
            <SafeAreaView style={{flex: 1, paddingBottom: 35}}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.container}
                    >
                        <View style={styles.commentHeader}>
                            <Text style={styles.text}>Коментарі <Text style={styles.commentsCount}>1,2
                                тис.</Text></Text>
                            {/*<CommentEditButton visible={true} />*/}
                        </View>
                        <ScrollView
                            style={{marginBottom: 40}}
                            scrollEnabled={true}
                        >
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                            <Comment comment={comment} />
                        </ScrollView>
                    </View>
                </View>
            </View>
                <CommentForm onPress={focusHandle} />
            </SafeAreaView>
        </Modal>
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
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: '#0C0F14',
        paddingTop: 20,
        height: '80%', // 80% от высоты экрана
        width: '100%', // 50% от ширины экрана
    }
})
