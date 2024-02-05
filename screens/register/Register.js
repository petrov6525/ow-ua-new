import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    Button,
    Animated
} from "react-native";
import {fontStyles} from "../../styles/font";
import FontLoader from "../login/components/FontLoader";
import WelcomeLayout from "../layouts/welcomeLayout";
import PasswordInput from "../components/auth/PasswordInput";
import WelcomeFormButton from "../components/auth/WelcomeFormButton";
import {welcomeStyles} from "../../styles/welcome";
import {useDispatch, useSelector} from "react-redux";
import GoogleAuthService from "../../services/googleAuthService";
import LoginFormErrors from "../components/loginFormErrors";
import {addError, clearErrors} from "../../store/slice/modal/modalSlice";
import {setIsRequest, setRegisterEmail} from "../../store/slice/auth/authSlice";

export default function Register({navigation}) {
    const dispatch = useDispatch();
    const authService = new AuthService(dispatch);

    const [modalVisible, setModalVisible] = React.useState(false);
    const [userNameValid, setUserNameValid] = React.useState(true);
    const [emailValid, setEmailValid] = React.useState(true);
    const [passwordValid, setPasswordValid] = React.useState(true);
    const [repeatPasswordValid, setRepeatPasswordValid] = React.useState(true);

    const [password, setPassword] = React.useState("");
    const [repeatPassword, setRepeatPassword] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [data, setData] = React.useState({
        userName: "",
        userEmail: "",
        password: ""
    });

    React.useEffect(()=>{
        dispatch(setIsRequest(false));
    },[]);

    const userNameHandle = (text) => {
        setUserName(text);
        setUserNameValid(true);
        setData({
            ...data,
            userName: text,
        });
    }

    const emailHandle = (text) => {
        setEmail(text);
        setEmailValid(true);
        setData({
            ...data,
            userEmail: text,
        });
    }

    const passwordHandle = (text) => {
        setPassword(text);
        setPasswordValid(true);
        setData({
            ...data,
            password: text
        })
    }

    const repeatPasswordHandle = (text) => {
        setRepeatPassword(text);
        setRepeatPasswordValid(true);
        setData({
            ...data,
        })
    }

    const submitHandle = async () => {
        dispatch(clearErrors());
        setUserNameValid(true);
        setEmailValid(true);
        setPasswordValid(true);
        setRepeatPasswordValid(true);

        const validate = validateForm();

        if (!validate) {
            setModalVisible(true);
            return;
        }
        const result = await authService.Register(data);
        if (!result) {
            setModalVisible(true);
            return;
        }
        navigation.navigate("FinishRegistration");
    }

    const validateForm = ()=> {
        let validate = true;
        const emailPattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordPattern = /^([a-z]|[A-Z]|[0-9]|[а-я]|[А-Я])+$/;

        if (userName.trim() === "") {
            validate = false;
            setUserNameValid(false);
            dispatch(addError("Порожнє ім'я користувача"));
        } else if (userName.trim().length < 4) {
            validate = false;
            setUserNameValid(false);
            dispatch(addError("Ім'я користувача має бути хоча б 4 символи"));
        }

        if (email.trim() === "" ) {
            validate = false;
            setEmailValid(false)
            dispatch(addError("Порожній email"));
        } else if (!emailPattern.test(email)) {
            validate = false;
            setEmailValid(false)
            dispatch(addError("Невіний фомат email"))
        }

        if (password.trim() === "") {
            validate = false;
            setPasswordValid(false);
            dispatch(addError("Порожній пароль"));
        } else if (!passwordPattern.test(password)) {
            validate = false;
            setPasswordValid(false)
            dispatch(addError("Пароль має містити лише букви та цифри"))
        } else if (password.trim().length < 8) {
            validate = false;
            setPasswordValid(false);
            dispatch(addError("Пароль має бути мінімум 8 символів"))
        } else if (password !== repeatPassword) {
            validate = false;
            setRepeatPasswordValid(false);
            dispatch(addError("Паролі не співпадають"));
        }

        return validate;
    }


    return (
        <WelcomeLayout>
            <FontLoader>
                <LoginFormErrors visible={modalVisible} setVisible={setModalVisible}/>
                <Text style={[
                    fontStyles.noirProMedium,
                    {marginBottom: 24, color: 'white', fontSize: 32}
                ]}>Реєстрація</Text>
                <Text style={[
                    fontStyles.noirProRegular,
                    {marginBottom: 23, color: 'white', fontSize: 16}
                ]}>Реєстрація через електронну адресу</Text>

                <TextInput style={[
                    welcomeStyles.loginBox,
                    fontStyles.noirProRegular,
                    !userNameValid ? styles.error : '',
                    {marginBottom: 16, color:'white', fontSize: 14}]}
                           placeholder={"Введіть ім'я кристувача"}
                           placeholderTextColor={'white'}
                           value={userName}
                           onChangeText={userNameHandle}
                           keyboardType={'default'}
                >

                </TextInput>

                <TextInput style={[
                    welcomeStyles.loginBox,
                    fontStyles.noirProRegular,
                    !emailValid ? styles.error : '',
                    {marginBottom: 16, color:'white', fontSize: 14}]}
                           placeholder={"Введіть електронну пошту"}
                           placeholderTextColor={'white'}
                           value={email}
                           onChangeText={emailHandle}
                           keyboardType={'email-address'}
                >

                </TextInput>
                <PasswordInput placeholder={"Введіть пароль"}
                               style={{marginBottom: 16}}
                               value={password}
                               onChange={passwordHandle}
                               errorStyles={styles}
                               passwordValid={passwordValid}
                />
                <PasswordInput placeholder={"Повторіть пароль"}
                               style={{marginBottom: 75}}
                               value={repeatPassword}
                               onChange={repeatPasswordHandle}
                               errorStyles={styles}
                               passwordValid={repeatPasswordValid}
                />
                <WelcomeFormButton text={"Зареєструватися"} onSubmit={submitHandle}/>
            </FontLoader>
        </WelcomeLayout>
    )
}

const styles = StyleSheet.create({
    register: {
        position: 'absolute',
        bottom: 50,
        display: "flex",
        flexDirection: "row",
        gap: 5
    },
    error: {
        borderColor: 'red',
        borderWidth: 2
    }
})
