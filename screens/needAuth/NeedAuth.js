import MainLayout from "../layouts/mainLayout";
import {BackHandler, SafeAreaView, Text, TouchableOpacity, StyleSheet} from "react-native";
import {fontStyles} from "../../styles/font";
import {useNavigation, useRoute} from "@react-navigation/native";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {setIsAuth} from "../../store/slice/auth/authSlice";


export const NeedAuth = ({message}) => {
    const route = useRoute();
    const {navigate, goBack} = useNavigation();
    const params = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        if (!params?.text) {
            return ;
        }
        if (!params?.accessBack) {
            return;
        }
        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backPressHandler
        )

        return () => {
            backHandler.remove();
        }
    }, []);

    const backPressHandler = () => {
        goBack();
    }

    const authPressHanlder = () => {
        // dispatch(setIsAuth(true));
        navigate('Login');
    }

    return(
        <MainLayout>
            <SafeAreaView style={{alignItems: 'center'}}>
                <Text style={styles.text}>{params?.text ?? message}</Text>
                <TouchableOpacity style={styles.button} onPress={authPressHanlder}>
                    <Text style={styles.text}>Авторизуватись</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 16,
        textAlign: "center"
    },
    button: {
        padding: 10,
        borderRadius: 15,
        borderColor: '#5A58C9',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    }
})