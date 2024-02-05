import * as React from 'react';
import WelcomeLayout from "../layouts/welcomeLayout";
import {Text, TextInput} from "react-native";
import {fontStyles} from "../../styles/font";
import PasswordInput from "../components/auth/PasswordInput";
import WelcomeFormButton from "../components/auth/WelcomeFormButton";
import FontLoader from "../login/components/FontLoader";
import {welcomeStyles} from "../../styles/welcome";
import {StyleSheet} from "react-native";
import {useDispatch} from "react-redux";
import {emailLogin} from "../../store/slice/auth/emailLoginThunk";
import AuthService from "../../services/authService";
import LoginFormErrors from "../components/loginFormErrors";
import {clearErrors} from "../../store/slice/modal/modalSlice";

export default function EmailLogin({navigation}) {
    const dispatch = useDispatch();
    const authService = new AuthService(dispatch);

    const [modalVisible, setModalVisible] = React.useState(false);
    const [emailValid, setEmailValid] = React.useState(true)
    const [passwordValid, setPasswordValid] = React.useState(true)
    const [password, setPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [data, setData] = React.useState({
        email: "",
        password: ""
    });

    const emailHandle = (text) => {
        setEmail(text);
        setEmailValid(true);
        setData({
           ...data,
           email: text,
           password: password
        });
    }

    const passwordHandle = (text) => {
        setPassword(text);
        setPasswordValid(true);
        setData({
            ...data,
            email: email,
            password: text
        })
    }

    const submitHandle = async () => {
        dispatch(clearErrors());
        const validate = validateForm();
        if (validate) {
            const result = await authService.LoginWithEmail(data);
            if (!result) {
                setModalVisible(true);
            }
        }
    }

    const validateForm = ()=> {
        let validate = true;
        if(email.trim() === "") {
            validate = false;
            setEmailValid(false)
        }

        if (password.trim() === "") {
            validate = false;
            setPasswordValid(false);
        }

        return validate;
    }

    return(
        <WelcomeLayout>
            <FontLoader>
                <LoginFormErrors visible={modalVisible} setVisible={setModalVisible}/>
                <Text style={[
                    fontStyles.noirProMedium,
                    {marginBottom: 24, color: 'white', fontSize: 32}
                ]}>Вхід</Text>
                <Text style={[
                    fontStyles.noirProRegular,
                    {marginBottom: 23, color: 'white', fontSize: 16}
                ]}>Введіть данні для входу</Text>
                <TextInput style={[
                    welcomeStyles.loginBox,
                    fontStyles.noirProRegular,
                    !emailValid ? styles.error : '',
                    {marginBottom: 16, color:'white', fontSize: 14}]}
                           placeholder={"Введіть електронну пошту"} placeholderTextColor={'white'}
                           value={email}
                           onChangeText={emailHandle}
                           keyboardType={'email-address'}
                >
                </TextInput>
                <PasswordInput placeholder={"Введіть пароль"}
                               style={{marginBottom: 75}}
                               value={password}
                               onChange={passwordHandle}
                               errorStyles={styles}
                               passwordValid={passwordValid}
                />
                <WelcomeFormButton text={"Увійти"} onSubmit={submitHandle}/>
            </FontLoader>
        </WelcomeLayout>
    )
}

const styles = StyleSheet.create({
    error: {
        borderColor: 'red',
        borderWidth: 2
    }
})