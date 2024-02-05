import AsyncStorage from "@react-native-async-storage/async-storage";
import {setIsAuth} from "../store/slice/auth/authSlice";
import {useDispatch} from "react-redux";
import AuthService from "./authService";

class GoogleAuthService {
    constructor(dispatch) {
        this.dispatch = dispatch;
        this.authService = new AuthService(dispatch);
    }

    async handleSignInWithGoogle(response) {
        if (response?.type === "success") {
            return await this.getUserInfo(response.authentication.accessToken);
        }
        return false;
    }

    async getUserInfo(token) {
        if (!token) return;

        const response = await fetch(
            "https://www.googleapis.com/userinfo/v2/me",
            {
                headers: {Authorization: `Bearer ${token}`}
            }
        );
        const user = await response.json();
        const result = await this.authService.LoginWithGoogle(user);
        this.dispatch(setIsAuth(result));

        return result;
    }
}


export default GoogleAuthService;
