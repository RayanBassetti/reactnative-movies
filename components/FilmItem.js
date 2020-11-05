import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

function FilmItem({film}) {
    return (
        <View style={styles.itemView}>
            <View style={{flex: 100}}></View>
            <View>
                <View style={styles.itemContentTop}>
                    <Text style={styles.itemTitle}>{film.title}</Text>
                    <Text style={styles.itemTitle}>Note: {film.vote_average}</Text>
                </View>
                <Text style={styles.itemTitle}>{film.overview}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flex: 1,
        flexDirection: 'row',
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
    },
    itemContentTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemTitle: {
        color: 'black',
        fontSize: 20
    }
})

export default FilmItem