import {useEffect} from "react";
import * as NavigationBar from "expo-navigation-bar";


export const ModalLayout = ({children}) => {
    useEffect(() => {
        NavigationBar.setBackgroundColorAsync('#0C0F14');
        console.log("Layout Effect");
    }, []);
    return(
        <>
            {children}
        </>
    )
}