import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, ActivityIndicator, Share, TouchableOpacity, Platform } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { getImageFromApi, getFilmDetailFromApi } from '../API/TMDBApi'
import { connect } from 'react-redux'
import FavTouch from '../Animation/FavTouch'

/*
Comment ça marche le partage via React Navigation : 
- On va transférer dans les paramètres de navigation notre film et notre fonction pour partager
- On appelle ces params dans une fonction navigationOptions pour charger le header avec notre component de partage
*/

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
    favoriteContainer: {
        alignItems: 'center'
    },
    favIcon: {
        flex: 1,
        width: null,
        height: null
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
    },
    share_touchable_floatingactionbutton: {
        position: 'absolute',
        width: 60,
        height: 60,
        right: 30,
        bottom: 30,
        borderRadius: 30,
        backgroundColor: '#e91e63',
        justifyContent: 'center',
        alignItems: 'center'
      },
      share_image: {
        width: 30,
        height: 30
      }
})

function FilmDetail(props) {

    const {dispatch, favoriteFilms, navigation} = props
    const {filmId} = props.route.params
    const [film, setFilm] = useState(undefined)
    const [loading, setLoading] = useState(true)

    useEffect(() => { // ComponentDidMount
        getFilmDetailFromApi(filmId)
            .then(data => handleData(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => { // ComponentDidUpdate
        updateNavigationParams()
    }, [film])

    const updateNavigationParams = () => {
        // On accède à la fonction shareFilm et au film via les paramètres qu'on a ajouté à la navigation
        if (film != undefined && Platform.OS === 'ios') {
            // On a besoin d'afficher une image, il faut donc passe par une Touchable une fois de plus
            navigation.setOptions({
              headerRight: () => (
                  <TouchableOpacity
                      style={styles.share_touchable_headerrightbutton}
                      onPress={() => shareFilm(film)}
                  >
                      <Image
                          style={styles.share_image}
                          source={require('../assets/ic_share.png')} 
                      />
                  </TouchableOpacity>
              )
        })
      }
    }
    
    const shareFilm = (film) => {
        Share.share({
            title: film.title, 
            message: film.overview
        })
    }

    const toggleFavorite = () => {
        const action = { type: "TOGGLE_FAVORITE", value: film }
        dispatch(action)
    }

    const handleData = (data) => {
        setFilm(data)
        setLoading(false)
    }

    const handleFavButton = () => {
        let shouldEnlarge = false
        let imageAsset = require('../assets/ic_favorite_border.png')
        if(favoriteFilms.findIndex(film => film.id === filmId) !== -1) { // if we find the movie
            shouldEnlarge = true
            imageAsset = require('../assets/ic_favorite.png')
        }

        return (
            <FavTouch shouldEnlarge={shouldEnlarge}>
                <Image style={styles.favIcon} source={imageAsset}/>
            </FavTouch>

        )
    }

    const displayFloatingButton = () => {
        if (film != undefined && Platform.OS === 'android') { // Uniquement sur Android et lorsque le film est chargé
          return (
            <TouchableOpacity
              style={styles.share_touchable_floatingactionbutton}
              onPress={() => shareFilm()}>
              <Image
                style={styles.share_image}
                source={require('../assets/ic_share.png')} />
            </TouchableOpacity>
          )
        }
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
                    <TouchableOpacity 
                        style={styles.favoriteContainer}
                        onPress={() => toggleFavorite()} 
                    >
                        {handleFavButton()}
                    </TouchableOpacity>
                    <Text style={styles.itemOverview}>{film.overview}</Text>
                    <View style={styles.itemDescription}>
                        <Text>Note : {film.vote_average}/10</Text>
                        <Text>Sorti le {film.release_date}</Text>
                        <Text>Nombres de votes : {film.vote_count}</Text>
                        <Text>Budget : {film.budget}$</Text>
                        <Text>Companie(s) : {film.release_date}</Text>
                    </View>
                    {displayFloatingButton()}
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