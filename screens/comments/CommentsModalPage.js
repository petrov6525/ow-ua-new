import {
    BackHandler,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    ActivityIndicator, FlatList
} from "react-native";
import {fontStyles} from "../../styles/font";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {Comment} from "./components/Comment";
import {CommentForm} from "./components/CommentForm";
import {useSelector} from "react-redux";
import {useGetCommentsQuery} from "../../api/video/GradeApi";



const comment = {
    text: "This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched! This is one of the most amazing AMV's I've ever watched!"
}
export const CommentsModalPage = () => {
    const {navigate, goBack} = useNavigation();
    const route = useRoute();
    const {videoId} = route.params;
    const {data, refetch, isLoading} = useGetCommentsQuery(videoId);
    const count = data?.length ?? 0;
    const isAuth = useSelector((state) => state.authReducer.isAuth);


    useEffect(() => {
        refetch();
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            handleBackPress
        );

        return () => {
            backHandler.remove();
        };
    }, []);


    const handleBackPress = () => {
        goBack();
    }

    const focusHandle = () => {
        if (!isAuth) {
            navigate('NeedAuth', {text: "Авторизуйтесь щоб поставити оцінку відео"})
        }
    }

    return (
            <SafeAreaView style={{flex: 1, paddingBottom: 35}}>
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <View style={styles.container}
                    >
                        <View style={styles.commentHeader}>
                            <Text style={styles.text}>Коментарі <Text style={styles.commentsCount}>{count}</Text></Text>
                        </View>
                        {isLoading && <ActivityIndicator size={"large"} />}
                        {data && <FlatList
                            data={data}
                            renderItem={({item}) => <Comment comment={item}/>}
                            refreshing={true}
                        />}
                    </View>
                </View>
            </View>
                <CommentForm onPress={focusHandle} videoId={videoId} />
            </SafeAreaView>
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
        backgroundColor: 'rgba(0, 0, 0, 0)', // полупрозрачный фон
    },
    modalContent: {
        backgroundColor: '#0C0F14',
        paddingTop: 20,
        position: 'absolute',
        top: 230,
        bottom: 0,
        width: '100%',
    }
})
