import {Text, TouchableOpacity, View, StyleSheet} from "react-native";
import {fontStyles} from "../../../styles/font";
import {useState} from "react";


export const Navigation = ({activeIndex, setActiveIndex}) => {

    return(
        <View style={styles.view}>
            <TouchableOpacity
                style={[styles.button, {borderColor: activeIndex === 0 ? '#5A58C9' : 'rgba(255,255,255,0)'}]}
                onPress={()=>setActiveIndex(0)}
            >
                <Text style={styles.text}>Головна</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.button, {borderColor: activeIndex === 1 ? '#5A58C9' : 'rgba(255,255,255,0)'}]}
                onPress={()=>setActiveIndex(1)}
            >
                <Text style={styles.text}>Відео</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        borderBottomColor: '#D5D5D5',
        borderBottomWidth: 1,
        flexDirection: 'row',
        marginTop: 20,
        width: '100%',
        backgroundColor: 'rgba(12,15,20,0.61)',
        paddingLeft: 20,
        paddingBottom: 5,
        borderRadius: 15,
        paddingTop: 10,
        marginBottom: 10
    },
    text: {
        ...fontStyles.noirProRegular,
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginRight: 20,
        width: 100,
    }
})