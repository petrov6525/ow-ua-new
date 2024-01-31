import * as React from 'react';
import {
    Blur,
    Canvas,
    Circle, Fill,
    vec
} from "@shopify/react-native-skia";
import {Dimensions} from "react-native";


const {width, height} = Dimensions.get('window');
const cTop = vec(71.5-12, 71.5+16);
const rTop = 71.5;

const cBottom = vec(width-99+27, height-99+12);
const rBottom = 99;
export default function LayoutBlur() {
    return (
        <Canvas style={{ flex: 1}}>
            <Fill color={'rgb(12, 15, 20)'}/>
            <Circle c={cTop} r={rTop} color='#5A58C9' opacity={1}>
                <Blur blur={120} style="normal"  />
            </Circle>
            <Circle c={cBottom} r={rBottom} color='#5A58C9' opacity={1}>
                <Blur blur={120} style="normal"  />
            </Circle>
        </Canvas>
    )
}