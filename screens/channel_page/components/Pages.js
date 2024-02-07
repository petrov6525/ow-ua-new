import {Text, View} from "react-native";
import {fontStyles} from "../../../styles/font";
import {MainPage} from "./MainPage";
import {VideosPage} from "./VideosPage";


export const Pages = ({index}) => {
    const text = index === 0 ? 'Main' : 'Videos';
    if (index === 0 ) return <MainPage />
    if (index === 1) return <VideosPage />
}