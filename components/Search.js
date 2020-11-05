import React, {useState} from 'react'
import { StyleSheet, View, TextInput, ActivityIndicator, Button, FlatList} from 'react-native'
import FilmItem from './FilmItem'

import {getFilmsFromApiWithSearchedText} from '../API/TMDBApi'
function Search() {
    let page = 0
    let totalPages = 0
    const [input, setInput] = useState("")
    const [movies, setMovies] = useState([])
    const [isLoading, setLoading] = useState(false)

    const handleSearch = () => {
        page = 0
        totalPages = 0
        setMovies([])
        loadMovies()
    }

    const loadMovies = () => {
        setLoading(true)
        getFilmsFromApiWithSearchedText(input, page + 1)
            .then(data => {
                page = data.page
                totalPages = data.total_pages
                setMovies(data.results)
                setLoading(false)
            })

    }

    const displayLoading = () => {
        if(isLoading) {
            <View style={styles.loading_container}>
            <ActivityIndicator size='large' />
        </View>
        } 
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
                <FlatList
                data={movies}
                renderItem={({item}) => <FilmItem film={item} />}
                keyExtractor={ (item) => item.id.toString()}  
                onEndReachedThreshold={0.5}
                onEndReached={() => {
                  if(page < totalPages) {
                    loadMovies()
                  }
                }}
                />
                {displayLoading()}
            </View>
        </View>
    )
}
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
  
export default Search