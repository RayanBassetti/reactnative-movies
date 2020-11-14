import React, { useEffect, useState } from 'react'
import { Animated, Dimensions } from 'react-native'

function FadeIn({children}) {
    const [positionLeft, setPositionLeft] = useState(new Animated.Value(Dimensions.get('window').width))

    useEffect(() => {
        Animated.spring(
            positionLeft,
            {
                toValue: 0
            }
        ).start()
    }, [])

    return (
        <Animated.View 
            style={{left: positionLeft}}>
        {children}
        </Animated.View>
    )
}

export default FadeIn