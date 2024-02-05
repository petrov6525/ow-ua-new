import AsyncStorage from "@react-native-async-storage/async-storage";


class AsyncStorageService
{
    async GetEmail() {
        const authData = await AsyncStorage.getItem("@authData");
        const user = JSON.parse(authData).user;

        return user.email;
    }

    async GetUser() {
        const authData = await AsyncStorage.getItem("@authData");
        if (!authData) {
            return null;
        }
        return JSON.parse(authData).user;
    }
}

const asyncStorageService = new AsyncStorageService();

export default asyncStorageService;