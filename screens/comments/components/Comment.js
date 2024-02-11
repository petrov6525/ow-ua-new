import {Image, Text, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";


export const Comment = ({comment}) => {
    return (
        <View style={styles.comment}>
            <Image source={{uri: comment.user.photoUrl}}
                   style={{width: 50, height: 50, marginRight: 10, borderRadius: 30}}/>
            <View>
                <Text style={styles.userName}>{comment.user.displayName}</Text>
                <Text style={styles.commentText}>{comment.text}</Text>
            </View>
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
    userName: {
        ...fontStyles.noirProRegular,
        fontSize: 12,
        color: 'rgba(255,255,255,0.53)'
    }
})