import AsyncStorage from "@react-native-async-storage/async-storage";
import authService from "../services/authService";
import asyncStorageService from "../services/asyncStorageService";

export const getWatchInfo = (video) => {
    const time = new Date().getTime() - new Date(video.uploadDate).getTime();

    return `${video.views} переглядів ${time} тому`;
}

export const isVideoOwner = async (user) => {
    const userData = await asyncStorageService.GetUser();

     return userData.id === user.id;
}