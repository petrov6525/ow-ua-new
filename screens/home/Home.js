import * as React from "react";
import MainLayout from "../layouts/mainLayout";
import FontLoader from "../login/components/FontLoader";
import {Videos} from "./components/Videos";

export default function Home() {
    return(
        <MainLayout>
            <FontLoader>
                    <Videos />
            </FontLoader>
        </MainLayout>
    )
}