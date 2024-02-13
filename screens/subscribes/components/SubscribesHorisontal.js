import {SafeAreaView, ScrollView, Text} from "react-native";
import {SubscribeMini} from "./SubscribeMini";
import {useGetAllSubscribesQuery} from "../../../api/SubscribesApi";
import {useEffect, useMemo} from "react";
import {useSelector} from "react-redux";
import asyncStorageService from "../../../services/asyncStorageService";
import {useNavigation} from "@react-navigation/native";


const subscribe = {
    channelName: "Channel Name kpodifjgiodrjgooperjfiorjfiorjifordj"
}

export const SubscribesHorizontal = ({data}) => {
    const subscribes = useMemo(()=>{return data ?? []},[data]);


    return(
        <SafeAreaView>
            <ScrollView
                scrollEventThrottle={5}
                horizontal={true}
                style={{marginTop: 10}}
            >
                {subscribes.map(item=> (<SubscribeMini key={item.id} subscribe={item} />))}
            </ScrollView>
        </SafeAreaView>
    )
}