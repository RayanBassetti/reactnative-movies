import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'
import FilmList from './FilmList'

const styles = StyleSheet.create({})

function Favorites(props) {
    const {favoriteFilms, navigation} = props
    return (
        <View>
            {favoriteFilms.length === 0 &&
            <Text>Pas de favoris... Allez en ajouter !</Text>
            
            }
            {favoriteFilms.length > 0 &&
            <FilmList 
                movies={favoriteFilms}
                navigation={navigation}
                isFavorite={true}
            />
            
            }
        </View>
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.favoriteFilms
    }
}

export default connect(mapStateToProps)(Favorites)