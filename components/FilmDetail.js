import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getImageFromApi, getFilmDetailFromApi } from '../API/TMDBApi'

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    itemImage: {
        width: 120,
        height: 180,
        margin: 5,
    },
})

function FilmDetail(props) {
    const {filmId} = props.route.params
    const [film, setFilm] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFilmDetailFromApi(filmId).then(data => handleData(data))
        console.log(film)
    }, [])

    const handleData = (data) => {
        setFilm(data)
        setLoading(false)
    }

    return (
        <View style={styles.container}>
            {loading &&
                <View style={styles.loading_container}>
                    <ActivityIndicator size='large' />
                </View>
            }
            {!loading &&
                <ScrollView>
                    <Image 
                    style={styles.itemImage}
                    source={{uri: getImageFromApi(film.poster_path)}}
                    />
                    <View>
                        <View>
                            <Text>{film.title}</Text>
                            <Text>{film.vote_average}</Text>
                        </View>
                        <Text>{film.overview}</Text>
                        <Text>Sorti le {film.release_date}</Text>
                    </View>
                </ScrollView>

            }
        </View>
    )
}

export default FilmDetail