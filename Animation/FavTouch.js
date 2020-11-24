import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

export default function FavTouch({children, shouldEnlarge}) {
    const [size, setSize] = useState(new Animated.Value(shouldEnlarge ? 80:40))

    useEffect(() => {
        Animated.spring(
            size,
            {
                toValue: shouldEnlarge ? 80 : 40,
                useNativeDriver: false
            },
        ).start()
    }, [shouldEnlarge])

    return (
        <Animated.View style={{width: size, height: size}}>
            {children}
        </Animated.View>
    )
}