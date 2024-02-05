import {TouchableOpacity, StyleSheet} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const CommentEditButton = ({visible}) => {
    if (visible) {
        return(
            <TouchableOpacity style={styles.commentButton}
                // onPress={()=> setCommentFormVisible(!commentFormVisible)}
            >
                <MaterialCommunityIcons name="comment-edit-outline" color={'rgba(255,255,255,0.8)'} size={20}/>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    commentButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#5A58C9',
        borderRadius: 15,
        width: 60,
        height: 25
    },
})