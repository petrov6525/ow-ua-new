import MainLayout from "../layouts/mainLayout";
import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {fontStyles} from "../../styles/font";
import {useNavigation} from "@react-navigation/native";
import asyncStorageService from "../../services/asyncStorageService";
import {useDispatch} from "react-redux";
import {logout} from "../../store/slice/auth/authSlice";


export const ProfileSettings = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();


    const logOut = async () => {
        await asyncStorageService.Logout();
        dispatch(logout());
        navigation.navigate('Home');
    }


    return(
        <SafeAreaView style={styles.modalContainer}>
            <View style={styles.modalContent}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={logOut}
                >
                    <Text style={styles.text}>Вийти</Text>
                    <MaterialCommunityIcons name="logout" color={'rgba(255,255,255,0.8)'} size={25}/>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProRegular,
        marginRight: 20,
        fontSize: 16,
        color: 'rgba(255,255,255,0.8)'
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
        position: 'absolute',
        bottom: 0,
        height: 150,
        width: '100%',
        padding: 50,
        alignItems: "flex-end"
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    }
})