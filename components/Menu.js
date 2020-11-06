import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

function Menu({navigation}) {
    return (
        <View style={styles.menu}>
            <Button title="Rechercher" onPress={() => {console.log(title)}} style={styles.menuButton}/>
            <Button title="Home" onPress={() => {console.log(title)}} style={styles.menuButton}/>
            <Button title="Menu 3" onPress={() => {console.log(title)}} style={styles.menuButton}/>
        </View>
    )
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 5,
        borderColor: 'black',
    },
    menuButton: {
        padding: 10
    }
})

export default Menu