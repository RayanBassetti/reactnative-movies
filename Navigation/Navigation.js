import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from '../components/Search'
import Favorites from '../components/Favorites'
import FilmDetail from '../components/FilmDetail'
import { Image, StyleSheet } from 'react-native';

// https://www.youtube.com/watch?v=nQVCkqvU1uE

const SearchStack = createStackNavigator()
const FavorisStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const styles = StyleSheet.create({
  iconStyle: {
    height: 30,
    width: 30
  }
})

function TabsScreens() {
  return (
    <Tabs.Navigator 
      initialRouteName="Rechercher"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          if (route.name === 'Rechercher') {
            return <Image style={styles.iconStyle} source={require('../assets/ic_search.png')}/>
          } else if (route.name === 'Favoris') {
            return <Image style={styles.iconStyle} source={require('../assets/ic_favorite.png')}/>
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen 
        name="Rechercher" 
        component={SearchStackScreen}
      />
      <Tabs.Screen 
        name="Favoris" 
        component={FavorisStackScreen}
      />
    </Tabs.Navigator>
  )
}

export default TabsScreens

function SearchStackScreen() {
  return (
    <SearchStack.Navigator
      initialRouteName="Rechercher"
      screenOptions={{ gestureEnabled: false }}
    >
      <SearchStack.Screen
        name="Rechercher"
        options={{ title: 'Rechercher' }}
      >
        {props => <Search {...props}/>}
      </SearchStack.Screen>

      <SearchStack.Screen
        name="FilmDetail"
        options={{ title: 'Détail du film' }}
      >
        {props => <FilmDetail {...props}/>}
      </SearchStack.Screen>
    </SearchStack.Navigator>
  )
}

function FavorisStackScreen() {
  return (
    <FavorisStack.Navigator>
      <FavorisStack.Screen        
        name="Favoris"
        options={{ title: 'Films favoris' }}
      >
        {props => <Favorites {...props}/>}

      </FavorisStack.Screen>
      {/* <FavorisStack.Screen></FavorisStack.Screen> */}
    </FavorisStack.Navigator>
  )
}