import { Animated, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { colors } from '../../../constants'
import { PinchGestureHandler, State } from 'react-native-gesture-handler';
export const ImageContainer = () => {

    const [scale, setscale] = useState(new Animated.Value(1))


    const onPinchEvent = Animated.event([{ nativeEvent: { scale: scale } }], {
        useNativeDriver: true,
    });


    return (
        <View style={styles.container}>
            <PinchGestureHandler
                onGestureEvent={onPinchEvent}
            >
                <Animated.Image
                    source={{
                        uri:
                            'https://images.pexels.com/photos/2147459/pexels-photo-2147459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
                    }}
                    style={[
                        styles.image,
                        {
                            transform: [{ scale: scale }],
                        },
                    ]}
                    resizeMode="contain"
                />
            </PinchGestureHandler>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        padding: 20,
        overflow: 'hidden'
    },
    image: {
        height: 200
    }
})