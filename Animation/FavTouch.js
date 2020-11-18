import React, { useEffect, useState } from 'react'
import { Animated } from 'react-native'

// class FavTouch extends React.Component {

//   constructor(props) {
//     super(props)
//     this.state = {
//       viewSize: new Animated.Value(this._getSize())
//     }
//   }

//   _getSize() {
//     if (this.props.shouldEnlarge) {
//       return 80
//     }
//     return 40
//   }
//   // La méthode componentDidUpdate est exécuté chaque fois que le component est mise à jour, c'est l'endroit parfait pour lancer / relancer notre animation.
//   componentDidUpdate() {
//     Animated.spring(
//       this.state.viewSize,
//       {
//         toValue: this._getSize(),
//         useNativeDriver: false
//       }
//     ).start()
//   }

//   render() {
//     return (
//         <Animated.View
//           style={{ width: this.state.viewSize, height: this.state.viewSize }}>
//           {this.props.children}
//         </Animated.View>
//     )
//   }
// }

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