import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView, Text} from "react-native";
import {Category} from "./Category";
import {useGetAllCategoriesQuery} from "../../../api/video/VideoApi";



export const Categories = () => {
    const {data, refetch} = useGetAllCategoriesQuery();

    useEffect(() => {
        refetch();
    }, []);

    return(
        <ScrollView style={styles.container}
                    horizontal={true}
        >
            {data && data.map((category) => (
                <Category key={category.id} category={category} />
            ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        paddingBottom: 5,
        height: 45,
        backgroundColor: '#0C0F14',
    }
})