import asyncStorageService from "./asyncStorageService";
import {axiosInstance as axios} from "../routing/axios";
import {ROUTES} from "../api/constants";


class VideoService {
    async UploadVideo (video) {
        const token = await asyncStorageService.GetAccessToken();
        console.log("Token: ", token);
        try {
            const response = await axios.post(ROUTES.UPLOAD_VIDEO, video, {
                headers: {
                    'Authorization' : `Bearer ${token}`,
                    'Content-Type' : 'multipart/form-data;'
                },
                timeout: 5000
            });
            return {status: true, data: response.data}
        } catch (e) {
            return {status: false, data: e.message}
        }
    }
}

const videoService = new VideoService();

export default videoService;