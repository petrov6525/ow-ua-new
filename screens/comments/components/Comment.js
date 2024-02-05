import {Image, Text, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";


export const Comment = ({comment}) => {
    return (
        <View style={styles.comment}>
            <Image source={require('../../../assets/channel_profile_logo.png')}
                   style={{width: 50, height: 50, marginRight: 10}}/>
            <Text style={styles.commentText}>{comment.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    comment: {
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginBottom: 20,
        marginRight: 20,
        paddingRight: 20
    },
    commentText: {
        ...fontStyles.noirProRegular,
        marginRight: 20
    },
})