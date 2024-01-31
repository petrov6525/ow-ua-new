import React from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
import {Category} from "./Category";



export const Categories = () => {

    return(
        <ScrollView style={styles.container}
                    horizontal={true}
        >
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        <Category category="Category" />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 5,
    }
})