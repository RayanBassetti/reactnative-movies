import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100
    }
})

function Profile({navigation}) {
    return(
        <View style={styles.container}>
            <Button title="Go to searching" onPress={() => {navigation.navigate("Rechercher")}} />
        </View>
    )
}

export default Profile