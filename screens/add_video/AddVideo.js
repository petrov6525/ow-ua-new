import MainLayout from "../layouts/mainLayout";
import {useDispatch, useSelector} from "react-redux";
import {NeedAuth} from "../needAuth/NeedAuth";
import {SafeAreaView, TouchableOpacity, StyleSheet} from "react-native";
import {Uploading} from "./components/Uploading";
import * as ImagePicker from 'expo-image-picker';
import {useEffect, useState} from "react";
import {useNavigation} from "@react-navigation/native";
import {ref, uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import {storage} from "../../firebase-config";
import {
    setIsUploading,
    setShowUploadStatus,
    setUploadProgress, setUploadStatus,
    setUploadVideoTitle
} from "../../store/slice/videoSlice";
import Ionicons from "react-native-vector-icons/Ionicons";
import videoService from "../../services/videoService";


export const AddVideo = () => {
    const navigation = useNavigation();
    const [video, setVideo] = useState("");
    const [redirect, setRedirect] = useState(false);
    const dispatch = useDispatch();


    const isUploading = useSelector((state) => state.videoReducer.isUploading)
    const uploadVideoTitle = useSelector((state) => state.videoReducer.uploadVideoTitle)
    const isAuth = useSelector((state) => state.authReducer.isAuth);

    useEffect(() => {
        if (redirect) {
            navigation.navigate('Home');
        }
    }, []);

    if (!isAuth) {
        return (
            <NeedAuth message={"Авторизуйтесь щоб додати відео"}/>
        )
    }


    const pickVideo = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1,
            allowsMultipleSelection: false,
        })
        if (result.canceled) {
            navigation.navigate('Home');
        }
        const uri = result.assets[0].uri
        setVideo(uri);
    }
    const uploadVideo = async (uri, data) => {
        dispatch(setIsUploading(true));

        const response = await fetch(uri);
        const blob = await response.blob();
        const storageRef = ref(storage, "Videos/" + new Date().getTime());
        const uploadTask = uploadBytesResumable(storageRef, blob);
        uploadTask.on("state_changed",
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                dispatch(setUploadProgress(progress.toFixed()))
            },
            (error) => {
                console.log("Error ", error);
                handleFinish(false, data);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadUrl) => {
                    data.link_video = downloadUrl;
                    await handleFinish(true, data);
                })
            },
        )
    }

    const handleFinish = async (status, data) => {
        console.log("Data: ", data);
        if (!status) {
            dispatch(setUploadStatus(false));
            dispatch(setShowUploadStatus(true));
            return;
        }

        const response = await videoService.UploadVideo(data);

        dispatch(setUploadStatus(response.status));
        dispatch(setShowUploadStatus(true));
        dispatch(setIsUploading(false));
        dispatch(setUploadProgress(0));
    }

    const onCancel = () => {
        setVideo("");
        dispatch(setShowUploadStatus(false));
    }

    const handleStart = async (data) => {
        if (data.title.trim() === "") {
            data.title = "Без назви";
        }
        dispatch(setUploadVideoTitle(data.title));
        await uploadVideo(video, data);
    }


    return (
        <MainLayout>
            <SafeAreaView style={{flex: 1, width: '100%'}}>
                {video && <Uploading video={video} onCancel={onCancel} onStart={handleStart}/>}
                {!isUploading &&
                    <TouchableOpacity
                        style={styles.add}
                        onPress={pickVideo}
                    >
                        <Ionicons name="videocam-outline" color='white' size={30}/>
                    </TouchableOpacity>
                }
            </SafeAreaView>
        </MainLayout>
    )
}

const styles = StyleSheet.create({
    add: {
        width: 50,
        height: 50,
        borderRadius: 50,
        position: 'absolute',
        bottom: 100,
        right: 20,
        backgroundColor: 'rgba(90,88,201,0.2)',
        alignItems: 'center',
        justifyContent: 'center'
    }
})