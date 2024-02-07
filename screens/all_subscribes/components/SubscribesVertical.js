import {SafeAreaView, ScrollView, Text, StyleSheet} from "react-native";
import {Subscribe} from "./Subscribe";
import {fontStyles} from "../../../styles/font";


const subscribe = {
    channelName: "Channel Name kpodifjgiodrjgooperjfiorjfiorjifordj"
}

export const SubscribesVertical = () => {
    return (
        <SafeAreaView>
            <ScrollView
                scrollEventThrottle={5}
                horizontal={false}
                style={styles.view}
            >
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
                <Subscribe subscribe={subscribe}/>
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