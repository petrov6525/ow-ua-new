import React, {useRef, useEffect, useState} from 'react';
import { View, PanResponder, Animated, StatusBar, Alert } from 'react-native';

export const DraggableVideo = ({children, eventHandler, isDraggable}) => {
    const positionY = useRef(new Animated.Value(0)).current;
    const statusBarHeight = StatusBar.currentHeight || 0;
    const [isFullScreen, setIsFullScreen] = useState(isDraggable);

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: (evt, gestureState) =>
                Math.abs(gestureState.dy) > Math.abs(gestureState.dx),
            onPanResponderMove: (evt, gestureState) => {
                // const newY = gestureState.dy + statusBarHeight;
                const newY = gestureState.dy;
                Animated.event([null, { dy: positionY }], { useNativeDriver: false })(
                    evt,
                    { ...gestureState, dy: newY }
                );
            },
            onPanResponderRelease: (_, gestureState) => {
                // Сбросить позицию до изначальной точки
                Animated.spring(positionY, { toValue: 0, useNativeDriver: false }).start();

                // Проверка, был ли элемент перемещен на 50 пикселей вниз
                if (gestureState.dy > 50) {
                    console.log(isDraggable);
                    // Срабатывает определенное событие, например, выводится оповещение
                    // Alert.alert('Событие', 'Элемент был перемещен на 50px вниз');
                    // eventHandler(isFullScreen);
                }
            },
        })
    ).current;

    useEffect(() => {
        // positionY.setValue(statusBarHeight); // Установка начальной позиции с учетом статус-бара
    }, [statusBarHeight]);


    useEffect(() => {
        setIsFullScreen(isDraggable);
    }, [isDraggable]);

    return (
        <Animated.View
            style={{
                transform: [{ translateY: positionY }],
            }}
            {...panResponder.panHandlers}
        >
            {/*<View style={{ width: 100, height: 100, backgroundColor: 'blue' }} />*/}
            {children}
        </Animated.View>
    );
};