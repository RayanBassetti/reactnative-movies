import React, { useEffect, useState } from 'react'
import { Animated, Dimensions } from 'react-native'

function FadeIn({children}) {
    const [positionRight, setPositionRight] = useState(new Animated.Value(Dimensions.get('window').width))

    useEffect(() => {
        Animated.spring(
            positionRight,
            {
                toValue: 0,
                useNativeDriver: false
            }
        ).start()
    }, [])

    return (
        <Animated.View style={{right: positionRight}}>
        {children}
        </Animated.View>
    )
}

export default FadeIn