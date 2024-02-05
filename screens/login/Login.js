import * as React from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView} from "react-native";
import {fontStyles} from "../../styles/font";
import FontLoader from "./components/FontLoader";
import WelcomeLayout from "../layouts/welcomeLayout";
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuth, setIsRequest} from "../../store/slice/auth/authSlice";
import {googleConfig} from "../../config";
import GoogleAuthService from "../../services/googleAuthService";
import LoginFormErrors from "../components/loginFormErrors";
import {clearErrors} from "../../store/slice/modal/modalSlice";


WebBrowser.maybeCompleteAuthSession();

export default function Login({navigation}) {
    const [request, response, promptAsync] = Google.useAuthRequest(googleConfig);
    const dispatch = useDispatch();
    const googleAuthService = new GoogleAuthService(dispatch);

    const [modalVisible, setModalVisible] = React.useState(false);
    const isRequest = useSelector((state)=> state.authReducer.isRequest);

    React.useEffect( ()=>{
        dispatch(clearErrors());
        const login = async(response)=> {
            const result = await googleAuthService.handleSignInWithGoogle(response);
            setModalVisible(!result);
        }
        login(response);
    }, [response]);

    return (
        <WelcomeLayout>
            <SafeAreaView style={styles.container}>
                <FontLoader>
                    <LoginFormErrors visible={modalVisible}
                                     setVisible={setModalVisible}
                                     bottom={100}
                    />
                    <Text style={[
                        fontStyles.noirProMedium,
                        {marginBottom: 8, color: 'white', fontSize: 32}
                    ]}>Вхід</Text>
                    <Text style={[
                        fontStyles.noirProRegular,
                        {color: 'white', fontSize: 16, marginBottom: 36}
                    ]}>Оберіть варіант входу</Text>
                    <TouchableOpacity style={[
                        styles.loginBox,
                        {marginBottom: 16},
                        isRequest ? styles.request : ''
                    ]}
                    onPress={()=>promptAsync()}>
                        <Image source={require("../../assets/icons/logo_google.png")}
                               style={{width: 20, height: 20}}/>
                        <Text style={[fontStyles.noirProRegular,
                            {color: 'white', fontSize: 14}]}>Увійти через Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginBox} onPress={()=>navigation.navigate('EmailLogin')}>
                        <Image source={require("../../assets/icons/logo_mail.png")}
                               style={{width: 20, height: 14}}/>
                        <Text style={[fontStyles.noirProRegular,
                            {color: 'white', fontSize: 14}]}>Увійти з електронною адресою</Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity style={styles.loginBox} onPress={()=>navigation.navigate('FinishRegistration')}>
                        <Image source={require("../../../assets/icons/logo_mail.png")}
                               style={{width: 20, height: 14}}/>
                        <Text style={[fontStyles.noirProRegular,
                            {color: 'white', fontSize: 14}]}>Завершити реєстрацію</Text>
                    </TouchableOpacity>*/}
                    <View style={styles.register}>
                        <Text style={[fontStyles.noirProRegular,
                            {color:'white', fontSize: 14}]}>Немає аккаунта?</Text>
                        <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
                            <Text style={[fontStyles.noirProBold,
                                {color:'white', fontSize: 14}]}>Зареэструватися</Text>
                        </TouchableOpacity>
                    </View>
                </FontLoader>
            </SafeAreaView>
        </WelcomeLayout>


    )
}

const styles = StyleSheet.create({
    loginBox: {
        width: '80%',
        paddingLeft: 19,
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#5A58C9',
        height: 41,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 16.8,
        paddingBottom: 1
    },
    register: {
        position: 'absolute',
        bottom: 50,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    request: {
        opacity: 0.5
    }
})
