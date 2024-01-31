import React from "react";
import {TouchableOpacity, StyleSheet, Text, View} from "react-native";



export const Video = () => {

    return(
        <View style={styles.main}>
            <Text>
                Video
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        height: 100,
        borderRadius: 10,
        borderStyle: "solid",
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%'
    }
})