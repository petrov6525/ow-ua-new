import {View, StyleSheet, Text} from "react-native";


export const Playlist = ({playlist}) => {
    return(
        <View style={styles.view}>
            <View style={styles.box}>

            </View>
            <View>

            </View>
            <Text>...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        backgroundColor: 'red'
    },
    box: {
        width: 100,
        height: 100,
        borderRadius: 15,
        borderColor: '#5A58C9',
        borderWidth: 1
    }
})