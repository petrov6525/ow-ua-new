import MainLayout from "../layouts/mainLayout";
import {View, Text} from "react-native";
import {SubscribesVertical} from "./components/SubscribesVertical";
import {useEffect, useMemo} from "react";
import {useGetAllSubscribesQuery} from "../../api/SubscribesApi";


export const AllSubscribes = () => {
    const {data, isLoading, error, refetch} = useGetAllSubscribesQuery();
    const subsData = useMemo(()=> {return data?? []},[data]);

    useEffect(() => {
        refetch();
    }, []);
    return(
        <MainLayout>
            <View style={{width: '100%'}}>
                <SubscribesVertical data={subsData} />
            </View>
        </MainLayout>
    )
}