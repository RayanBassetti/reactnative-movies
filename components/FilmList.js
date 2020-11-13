import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import FilmItem from './FilmItem'

function FilmList(props) {
    const {movies, favoriteFilms, navigation} = props

    const getFilmDetail = (filmId) => {
        navigation.navigate("FilmDetail", { filmId: filmId })
    }

    return (
        <FlatList 
        data={movies}
        renderItem={({item}) => <FilmItem 
                                    film={item} 
                                    getFilmDetail={getFilmDetail}
                                    isFavorite={(favoriteFilms.findIndex(film => film.id === item.id) !== -1) ? true : false}
                                />}
        keyExtractor={ (item) => item.id.toString()}  
        extraData={favoriteFilms}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
            // if(page < totalPages) {
            //     loadMovies()
            // }
        }}
        />
    )
}

const mapStateToProps = (state) => {
    return {
        favoriteFilms: state.favoriteFilms
    }
}

export default connect(mapStateToProps)(FilmList)