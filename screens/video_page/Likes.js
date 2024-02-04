import {View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import {fontStyles} from "../../styles/font";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";


export const Likes = () => {
    return (
        <View style={styles.div}>
            <View>
                <TouchableOpacity style={styles.like}>
                    <Image source={require('../../assets/icons/like.png')} style={{width: 20, height: 17}}/>
                </TouchableOpacity>
                <Text style={styles.text}>44 тис</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.dislike}>
                    <Image source={require('../../assets/icons/dislike.png')} style={{width: 20, height: 17}}/>
                </TouchableOpacity>
                <Text style={styles.text}>12 тис</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    div: {
        flexDirection: 'row',
        display: 'flex',
        marginRight: 10
    },
    like: {
        borderColor: '#5A58C9',
        borderWidth: 1,
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        marginRight: 1
    },
    dislike: {
        borderColor: '#5A58C9',
        borderWidth: 1,
        width: 70,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: 15,
        borderBottomRightRadius: 15,
        marginRight: 1
    },
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 11,
        textAlign: 'center',
        marginTop: 2,
        color: '#87888C',
    }
})