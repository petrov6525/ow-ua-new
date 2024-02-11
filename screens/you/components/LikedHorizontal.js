import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {VideoMini} from "./VideoMini";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import {useNavigation} from "@react-navigation/native";


export const LikedHorizontal = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.view}>
            <View style={styles.header}>
                <View style={styles.textBlock}>
                    {/*<MaterialCommunityIcons name="history" color={'rgba(255,255,255,0.8)'} size={25}/>*/}
                    <Image
                        source={require('../../../assets/icons/like.png')}
                        style={{width: 25, height: 20}}
                    />
                    <Text style={styles.text}>Вподобані</Text>
                </View>

                <TouchableOpacity
                    onPress={()=>navigation.navigate('YouVideos', {title: 'Вподобані'})}
                    style={styles.allButton}
                >
                    <Text style={styles.allText}>Переглянути все</Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                horizontal={true}
            >
                <VideoMini />
                <VideoMini />
                <VideoMini />
                <VideoMini />
                <VideoMini />
                <VideoMini />
                <VideoMini />
                <VideoMini />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProMedium,
        fontSize: 20,
        marginLeft: 10
    },
    view: {
        alignItems: 'flex-start',
        // backgroundColor: 'red',
        marginVertical: 20
    },
    allButton: {
        backgroundColor: 'rgba(90,88,201,0.4)',
        paddingHorizontal: 10,
        paddingBottom: 2,
        marginHorizontal: 20,
        borderRadius: 15
    },
    allText: {
      ...fontStyles.noirProRegular,
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20
    }
})