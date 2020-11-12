import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ActivityIndicator, Button } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getImageFromApi, getFilmDetailFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'


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
        width: '100%',
        height: 180,
        marginRight: 10
    },
    itemTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    itemOverview: {
        fontStyle: 'italic',
        color: 'grey',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    itemDescription: {
        marginLeft: 10
    }
})

function FilmDetail(props) {
    const {dispatch} = props
    const {filmId} = props.route.params
    const [film, setFilm] = useState(undefined)
    const [loading, setLoading] = useState(true)
    console.log(props)

    useEffect(() => {
        getFilmDetailFromApi(filmId).then(data => handleData(data))
    }, [])

    // useEffect(() => {
    //     console.log("ComponentDidUpdate", props)
    // }, [props.state.favoriteFilms])

    const toggleFavorite = () => {
        const action = { type: "TOGGLE_FAVORITE", value: film }
        props.dispatch(action)
    }

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
                    <Text style={styles.itemTitle}>{film.title}</Text>
                    <Button title="Favoris" onPress={() => toggleFavorite()} />
                    <Text style={styles.itemOverview}>{film.overview}</Text>
                    <View style={styles.itemDescription}>
                        <Text>Note : {film.vote_average}/10</Text>
                        <Text>Sorti le {film.release_date}</Text>
                        <Text>Nombres de votes : {film.vote_count}</Text>
                        <Text>Budget : {film.budget}$</Text>
                        <Text>Companie(s) : {film.release_date}</Text>
                    </View>
                </ScrollView>

            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.favoriteFilms
    }
}
  
export default connect(mapStateToProps)(FilmDetail)