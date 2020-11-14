import React from 'react'

import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native'

import {getImageFromApi} from '../API/TMDBApi'

import FadeIn from '../Animation/FadeIn'

function FilmItem(props) {
    const {film, getFilmDetail, isFavorite} = props
    return (
        <FadeIn>
            <TouchableOpacity style={styles.itemView} onPress={() => {getFilmDetail(film.id)}}>
                <Image 
                    style={styles.itemImage}
                    source={{uri: getImageFromApi(film.poster_path)}}
                />
                <View style={styles.itemContent}>
                    <View style={styles.itemHeader}>
                        {isFavorite &&
                            <Image
                            style={styles.favoriteIcon}
                            source={require('../assets/ic_favorite.png')}
                            />
                        }
                        <Text style={styles.itemTitle}>{film.title}</Text>
                        <Text style={styles.itemRating}>{film.vote_average}</Text>
                    </View>
                    <Text style={styles.itemDescription} numberOfLines={6}>{film.overview}</Text>
                    <Text style={styles.itemDate}>Sorti le {film.release_date}</Text>
                </View>
            </TouchableOpacity>
        </FadeIn>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        height: 200,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    },
    favoriteIcon: {
        width: 20,
        height: 20
    },
    itemImage: {
        width: 120,
        height: 180,
        margin: 5,
    },
    itemContent: {
        flex: 1,
        margin: 5
    },
    itemHeader: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemTitle: {
        flex: 1,
        color: 'black',
        fontSize: 15,
        flexWrap: 'wrap'
    },
    itemRating: {
        color: 'grey',
        fontSize: 20
    },
    itemDescription: {
        flex: 7,
        color: 'grey',
        fontStyle: 'italic',
        marginTop: 10,
        fontSize: 10
    },
    itemDate: {
        flex: 1,
        color: 'grey',
        marginTop: 10,
        fontSize: 15,
        textAlign: 'right'
    }
})

export default FilmItem