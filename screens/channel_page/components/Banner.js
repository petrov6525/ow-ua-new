import {Image, StyleSheet, Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useGetSubscribersCountQuery, useGetVideoCountQuery} from "../../../api/SubscribesApi";
import {useEffect} from "react";


export const Banner = ({channel}) => {
    const {data: subs} = useGetSubscribersCountQuery(channel.id);
    const {data: video} = useGetVideoCountQuery(channel.id);
    useEffect(() => {
        console.log(subs);
    }, [subs]);
    return(
        <View style={{width: '100%'}}>
            <Image
                source={require('../../../assets/banner.jpg')}
                style={{width: '100%', height: 150}}
            />
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                <Image
                    style={{width: 60, height: 60, marginRight: 10, borderRadius: 50}}
                    source={{uri: channel.photoUrl}} />
                <View>
                    <Text style={[fontStyles.noirProMedium, {fontSize: 25}]}>{channel.displayName}</Text>
                    <Text style={styles.text} >{channel.email}</Text>
                    <Text style={styles.text}>{subs} subscribers • {video} video</Text>
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