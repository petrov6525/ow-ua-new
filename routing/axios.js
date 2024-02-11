import axios from "axios";

const baseUrl = "http://192.168.0.101:8085";
export const axiosInstance = axios.create({
    baseURL: baseUrl,
});

export default axiosInstance;