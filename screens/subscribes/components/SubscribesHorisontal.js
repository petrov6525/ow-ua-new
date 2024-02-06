import {SafeAreaView, ScrollView, Text} from "react-native";
import {SubscribeMini} from "./SubscribeMini";


const subscribe = {
    channelName: "Channel Name kpodifjgiodrjgooperjfiorjfiorjifordj"
}

export const SubscribesHorizontal = () => {
    return(
        <SafeAreaView>
            <ScrollView
                scrollEventThrottle={5}
                horizontal={true}
                style={{marginTop: 10}}
            >
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
                <SubscribeMini subscribe={subscribe} />
            </ScrollView>
        </SafeAreaView>
    )
}