import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";



export const Category = ({category}) => {
    return(
        <TouchableOpacity style={styles.category}>
            <Text style={styles.text}>
                {category}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    category: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 5,
        paddingBottom: 7,
        marginRight: 5,
        borderRadius: 15,
        backgroundColor: '#141921',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: 40
    },
    text: {
        color: 'white'
    }
})