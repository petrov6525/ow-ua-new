import {View} from "react-native";
import Svg, { Rect } from 'react-native-svg'


export const ProgressBar = ({progress}) => {
    const barWidth = 230;
    const progressWidth = (progress / 100) * barWidth;
    return(
            <Svg width={barWidth} height={7}>
                <Rect width={barWidth} height={'100%'} fill={'rgba(238,238,238,0.3)'} rx={3.5} ry={3.5} />
                <Rect width={progressWidth} height={'100%'} fill={'rgba(238,238,238,0.85)'} rx={3.5} ry={3.5} />
            </Svg>
    )
}