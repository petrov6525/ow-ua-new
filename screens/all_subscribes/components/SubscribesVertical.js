import {SafeAreaView, ScrollView, Text, StyleSheet} from "react-native";
import {Subscribe} from "./Subscribe";
import {fontStyles} from "../../../styles/font";
import {useEffect} from "react";


const subscribe = {
    channelName: "Channel Name kpodifjgiodrjgooperjfiorjfiorjifordj"
}

export const SubscribesVertical = ({data}) => {

    return (
        <SafeAreaView>
            <ScrollView
                scrollEventThrottle={5}
                horizontal={false}
                style={styles.view}
            >
                {data && data.map(item=> (<Subscribe key={item.id} subscribe={item} />))}

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    view: {
        marginLeft: 10,
        paddingRight: 10,
        height: '100%',
    }
})