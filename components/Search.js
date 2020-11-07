import React, {useState} from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator, Button, FlatList} from 'react-native'
import FilmItem from './FilmItem'

import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'

const styles = StyleSheet.create({
    input: {
      marginLeft: 10, 
      marginRight: 10, 
      height: 50, 
      borderColor: '#000000', 
      borderWidth: 1, 
      paddingLeft: 5 
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 200,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
  
function Search({navigation}) {
    let page = 0
    let totalPages = 0
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)

    const handleSearch = () => {
        setLoading(true)
        page = 0
        totalPages = 0
        setMovies([])
        loadMovies()
    }

    const loadMovies = () => {
        getFilmsFromApiWithSearchedText(input, page + 1)
            .then(data => {
                page = data.page
                totalPages = data.total_pages
                setMovies(data.results)
                setLoading(false)
            })

    }

    const getFilmDetail = (filmId) => {
        navigation.navigate("FilmDetail", { filmId: filmId })
    }
    
    return(
        <View style={styles.container}>  
            <View style={{marginTop: 50}}>
                <TextInput 
                    placeholder="Rechercher" 
                    style={styles.input} 
                    onChangeText={(text) => {setInput(text)}}
                    onSubmitEditing={() =>{handleSearch()}}
                />
                <Button title="Rechercher" onPress={() => {handleSearch()}}/>
                {loading &&
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                }
                {!loading &&
                    <FlatList
                    data={movies}
                    renderItem={({item}) => <FilmItem film={item} getFilmDetail={getFilmDetail}/>}
                    keyExtractor={ (item) => item.id.toString()}  
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                    if(page < totalPages) {
                        loadMovies()
                    }
                    }}
                    />
                }
            </View>
        </View>
    )
}
export default Search