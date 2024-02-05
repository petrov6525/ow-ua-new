import * as React from 'react';
import WelcomeLayout from "../layouts/welcomeLayout";
import {Text, TextInput, View, StyleSheet} from "react-native";
import {fontStyles} from "../../styles/font";
import {welcomeStyles} from "../../styles/welcome";
import PasswordInput from "../components/auth/PasswordInput";
import WelcomeFormButton from "../components/auth/WelcomeFormButton";
import FontLoader from "../login/components/FontLoader";
import {useSelector} from "react-redux";


export default function FinishRegistration({navigation}) {
    const registerEmail = useSelector((state)=> state.authReducer.registerEmail);

    return(
        <WelcomeLayout>
            <FontLoader>
                <Text style={[
                    fontStyles.noirProMedium,
                    {
                        marginBottom: 24,
                        color: 'white',
                        fontSize: 32,
                        width: '80%',
                        textAlign: 'center',
                        lineHeight: 36
                    }
                ]}>Завершіть реєстрацію</Text>
                <Text style={[
                    fontStyles.noirProRegular,
                    {
                        marginBottom: 110,
                        color: 'white',
                        fontSize: 16,
                        lineHeight: 20,
                        width: '80%',
                        textAlign: 'center',
                    }
                ]}>За Вашою електронною адресою відправлено листа з посиланням. Перейдіть за
                посиланням щоб завершити реєстрацію</Text>

                <WelcomeFormButton text={"Далі"}
                                   onSubmit={()=>navigation.navigate("EmailLogin")}
                />
                <View style={styles.info}>
                    <Text style={[
                        fontStyles.noirProBold,
                        {
                            color: 'green',
                            fontSize: 20,
                            lineHeight: 20,
                            textAlign: 'center'
                        }
                    ]}>Увага!</Text>
                    <Text style={[
                        fontStyles.noirProRegular,
                        {
                            color: 'green',
                            fontSize: 16,
                            lineHeight: 20,
                            textAlign: 'center'

                        }
                    ]}>Якщо Ви не отримали листа з посиланням - перевірте правильність вашого email.</Text>
                    <Text style={[
                        fontStyles.noirProBold,
                        {
                            color: 'green',
                            fontSize: 16,
                            lineHeight: 20,
                            marginTop: 10
                        }
                    ]}>Ваш email:
                        <Text style={{
                            textDecorationLine: 'underline',
                            color: 'white',
                            marginLeft: 10
                        }}> {registerEmail}</Text>
                    </Text>
                </View>

            </FontLoader>
        </WelcomeLayout>
    )
}

const styles = StyleSheet.create({
    info: {
        position: 'absolute',
        bottom: 50,
        borderColor: 'green',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 8,
        padding: 10,
        // alignItems: 'center',
        width: '90%'
    }
});