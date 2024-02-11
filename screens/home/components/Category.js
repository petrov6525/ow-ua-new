import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {toggleCurrentCategoryId} from "../../../store/slice/videoSlice";



export const Category = ({category}) => {
    const dispatch = useDispatch();
    const currentCategoryId = useSelector((state) => state.videoReducer.currentCategoryId);
    const backgroundColor = currentCategoryId === category.id ? '#5A58C9' : '#141921';
    return(
        <TouchableOpacity
            onPress={()=>dispatch(toggleCurrentCategoryId(category.id))}
            style={[styles.category, {backgroundColor: backgroundColor}]}
        >
            <Text style={styles.text}>
                {category.title}
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
        // backgroundColor: '#141921',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        height: 40
    },
    text: {
        color: 'white'
    }
})