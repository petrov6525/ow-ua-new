import AsyncStorage from "@react-native-async-storage/async-storage";
import {logout, setAccessToken, setIsAuth, setIsRequest} from "../store/slice/auth/authSlice";
import {addError} from "../store/slice/modal/modalSlice";
import router from "../routing/router";
import errorToStringHelper from "../helpers/errorToStringHelper";


class AuthService {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.router = router;
        this.errorHelper = errorToStringHelper;
    }

    async IsAuth() {
        const isAuth = await this.ReLogin();
        this.dispatch(setIsAuth(isAuth));
    }

    async ReLogin() {
        const user = await AsyncStorage.getItem("@authData");
        if (!user) {
            return false;
        }
        const refreshToken = JSON.parse(user).refreshToken;
        // const refreshToken = "lklm";
        const {status, data} = await this.router.ReLogin(refreshToken);

        if (status) {
            await AsyncStorage.setItem("@authData", JSON.stringify(data));
            this.dispatch(setAccessToken(data.accessToken));
        }

        return status;
    }

    async Logout () {
        await AsyncStorage.removeItem("@authData");
        this.dispatch(logout());
    }

    async LoginWithGoogle(user) {
        this.dispatch(setIsRequest(true));
        const {status, data} = await this.router.LoginWithGoogle(user);
        if (status) {
            await AsyncStorage.setItem("@authData", JSON.stringify(data));
            console.log(data);
        } else {
            this.dispatch(addError(this.errorHelper.getError(data)));
        }
        this.dispatch(setIsRequest(false));
        return status;
    }

    async LoginWithEmail(user) {
        this.dispatch(setIsRequest(true));
        const {status, data} = await router.LoginWithEmail(user);

        if (status) {
            await AsyncStorage.setItem("@authData", JSON.stringify(data));
        } else {
            this.dispatch(addError(this.errorHelper.getError(data)));
        }
        this.dispatch(setIsRequest(false));
        this.dispatch(setIsAuth(status));

        return status;
    }

    async Register(user) {
        this.dispatch(setIsRequest(true));
        const {status, data} = await router.Register(user);
        this.dispatch(setIsRequest(false));

        if (!status) {
            this.dispatch(addError(this.errorHelper.getError(data)));
        }

        return status;
    }

}

export default AuthService;