import {axiosInstance as axios} from "./axios";

class Router
{
    async LoginWithGoogle(user) {
        try {
            const response = await axios.post("/api/google/login",{
                uid: user.id,
                email: user.email,
                emailVerified: user.verified_email,
                displayName: user.name,
                photoUrl: user.picture
            }, {
                timeout: 5000
            });

            return {status: true, data: response.data}
        } catch (error) {
           return {status: false, data: error.message};
        }
    }

    async ReLogin(refreshToken) {
        try {
            const response = await axios.post("/api/auth/refresh-auth",{
                refreshToken: refreshToken
            },{
                timeout: 5000
            });

            return {status: true, data: response.data};
        } catch (error) {
            console.log(error.message);

            return {status: false, data: null};
        }
    }

    async LoginWithEmail(user) {
        try {
            const response = await axios.post("/api/auth/auth", user, {
                timeout: 5000
            });

            return {status: true, data: response.data};

        } catch (error) {
            return {status: false, data: error.message};
        }
    }

    async Register(user) {
        try {
            const response = await axios.post("/api/auth/register", user, {
                timeout: 5000
            });
            return {status: true, data: response.data};

        } catch (error) {
            return {status: false, data: error.message};
        }
    }
}

const router = new Router();

export default router;