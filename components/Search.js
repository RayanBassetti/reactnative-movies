import React from 'react'
import { StyleSheet, View, TextInput, Text, Button, FlatList} from 'react-native'
import FilmItem from './FilmItem'
function Search({text, data}) {
    return(
        // <View style={styles.container}>
        //     <TextInput placeholder="Rechercher" style={styles.input}/>
        //     <Button title="Rechercher" onPress={() => {console.log("Button pressed.")}}/>
        // </View>
        <View style={styles.container}>  
            <View style={{marginTop: 50}}>
                <Text>{text}</Text>
                <TextInput placeholder="Rechercher" style={styles.input}/>
                <Button title="Rechercher" onPress={() => {console.log("Button pressed.")}}/>
                <FlatList
                data={data}
                renderItem={({item}) => <FilmItem film={item} />}
                keyExtractor={ (item) => item.id.toString()}
                />

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
    }
  });
  
export default Search