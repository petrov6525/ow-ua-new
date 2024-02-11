// source: require('../../../assets/video/video_1.mp4'),
import {View, StyleSheet, Image, Text, TouchableOpacity, ScrollView} from "react-native";
import {Video} from "expo-av";
import {fontStyles} from "../../../styles/font";
import {ProgressBar} from "./ProgressBar";
import {useSelector} from "react-redux";
import {RadioButton, TextInput} from 'react-native-paper';
import {useEffect, useState} from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useGetAcceptStatusesQuery, useGetAllCategoriesQuery} from "../../../api/video/VideoApi";

export const Uploading = ({video, onCancel, onStart}) => {
    const uploadVideoTitle = useSelector((state) => state.videoReducer.uploadVideoTitle)
    const uploadProgress = useSelector((state) => state.videoReducer.uploadProgress)
    const isUploading = useSelector((state) => state.videoReducer.isUploading)
    const showUploadStatus = useSelector((state) => state.videoReducer.showUploadStatus)
    const uploadStatus = useSelector((state) => state.videoReducer.uploadStatus)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [statusId, setStatusId] = useState(1);
    const [categoryId, setCategoryId] = useState(1);
    const {data: categoriesData} = useGetAllCategoriesQuery();
    const {data: statusesData} = useGetAcceptStatusesQuery();

    const categories = categoriesData;

    const handleStart = () => {
        const data = {
            description: description,
            title: title,
            categoryId: categoryId,
            accessStatusId: statusId
        }
        onStart(data);
    }

    return (
        <View style={styles.view}>
            <View style={styles.uploadBox}>
                <Video
                    source={{uri: video}}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 6,
                        backgroundColor: 'black'
                    }}
                    resizeMode='contain'
                    isMuted={true}
                    shouldPlay={false}
                />
                {/*<View style={styles.testBox}></View>*/}
                {!isUploading && !showUploadStatus &&
                    <View
                        style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, paddingHorizontal: 40}}>
                        <TouchableOpacity onPress={handleStart}>
                            <Text style={[fontStyles.noirProMedium, {color: '#5A58C9'}]}>Start</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onCancel}>
                            <Text style={[fontStyles.noirProMedium]}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                }
                {showUploadStatus &&
                    <View
                        style={{ justifyContent: 'space-between', flex: 1, paddingHorizontal: 40, alignItems: 'center', rowGap: 20}}>
                        {uploadStatus && <Text style={[fontStyles.noirProMedium, {color: 'green'}]}>Завантажено</Text>}
                        {!uploadStatus && <Text style={[fontStyles.noirProMedium, {color: 'red'}]}>Виникла помилка</Text>}
                        <TouchableOpacity
                            onPress={onCancel}
                        >
                            <Text style={[fontStyles.noirProMedium]}>OK</Text>
                        </TouchableOpacity>
                    </View>
                }
                {isUploading &&
                    <View style={styles.progressBox}>
                        <ProgressBar progress={uploadProgress}/>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={styles.text}>Завантаження...</Text>
                            <Text style={fontStyles.noirProMedium}>{uploadProgress}%</Text>
                        </View>
                    </View>
                }
            </View>
            <>
                {isUploading && <Text style={fontStyles.noirProMedium}>{uploadVideoTitle}</Text>}
            </>

            {!isUploading && !showUploadStatus &&
                <ScrollView style={styles.form}>
                    <Text style={styles.label}>Назва:</Text>
                    <TextInput
                        value={title}
                        onChangeText={text => setTitle(text)}
                        textColor={'white'}
                        style={{
                            ...fontStyles.noirProRegular,
                            backgroundColor: 'transparent',
                            color: 'white',
                            height: 32,
                            marginBottom: 30
                        }}
                    />

                    <Text style={styles.label}>Опис:</Text>
                    <TextInput
                        value={description}
                        onChangeText={text => setDescription(text)}
                        textColor={'white'}
                        multiline={true}
                        style={{
                            ...fontStyles.noirProRegular,
                            backgroundColor: 'transparent',
                            color: 'white',
                            marginBottom: 30,
                        }}
                    />

                    <Text style={[styles.label, {marginBottom: 10}]}>Доступ:</Text>
                    <TouchableOpacity
                        onPress={() => setStatusId(1)}
                        style={[styles.statusButton, {backgroundColor: statusId === 1 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                    >
                        <MaterialCommunityIcons name="account-group-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                        <Text style={styles.statusText}>Публічний</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => setStatusId(2)}
                        style={[styles.statusButton, {backgroundColor: statusId === 2 ? 'rgba(90,88,201,0.4)' : 'transparent'}]}
                    >
                        <MaterialCommunityIcons name="shield-lock-outline" color={'rgba(255,255,255,0.8)'} size={30}/>
                        <Text style={styles.statusText}>Приватний</Text>
                    </TouchableOpacity>

                    <Text style={[styles.label, {marginTop: 20}]}>Категорія:</Text>
                    <View style={styles.categories}>
                        {categories && categories.map(category => (
                            <TouchableOpacity key={category.id}
                                              style={[styles.category, {backgroundColor: categoryId === category.id ? '#5A58C9' : 'transparent'}]}
                                              onPress={() => setCategoryId(category.id)}
                            >
                                <Text style={[fontStyles.noirProRegular]}>{category.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    view: {
        padding: 20
    },
    text: {
        ...fontStyles.noirProRegular,

    },
    uploadBox: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 100,
        width: '100%'
    },
    cancel: {
        alignItems: "center",
        backgroundColor: 'rgba(90,88,201,0.2)',
        paddingVertical: 10
    },
    cancelText: {
        ...fontStyles.noirProRegular,
        color: '#5A58C9'
    },
    testBox: {
        width: 100,
        height: 100,
        backgroundColor: 'rgba(90,88,201,0.2)',
        borderRadius: 15
    },
    progressBox: {
        marginLeft: 20,
        justifyContent: 'flex-end',
        rowGap: 20,
        height: '100%',
        paddingBottom: 10
    },
    uploadText: {
        ...fontStyles.noirProRegular,
    },
    form: {
        rowGap: 10,
        marginVertical: 20
    },
    label: {
        ...fontStyles.noirProRegular,
    },
    statusButton: {
        // backgroundColor: 'rgba(90,88,201,0.4)',
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        borderRadius: 5,
        paddingHorizontal: 10
    },
    statusText: {
        ...fontStyles.noirProRegular,
        marginHorizontal: 10
    },
    categories: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    category: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        marginVertical: 5,
        marginHorizontal: 5,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#5A58C9'
    }
})