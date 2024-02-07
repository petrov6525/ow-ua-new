import {Image, StyleSheet, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";


export const Banner = () => {
    return(
        <View style={{width: '100%'}}>
            <Image
                source={require('../../../assets/video_img.png')}
                style={{width: '100%', height: 150}}
            />
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                <Image
                    style={{width: 60, height: 60, marginRight: 10}}
                    source={require('../../../assets/channel_profile_logo.png')} />
                <View>
                    <Text style={[fontStyles.noirProMedium, {fontSize: 25}]}>Channel Title</Text>
                    <Text style={styles.text} >@userName</Text>
                    <Text style={styles.text}>100 subscribers • 100 video</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        ...fontStyles.noirProRegular,
        color: '#888888'
    }
})