import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from '../components/Search'
import Favorites from '../components/Favorites'
import FilmDetail from '../components/FilmDetail'

const SearchStack = createStackNavigator()
const FavorisStack = createStackNavigator()
const Tabs = createBottomTabNavigator()

function TabsScreens() {
  return (
    <Tabs.Navigator 
      initialRouteName="Rechercher"
    >
      <Tabs.Screen name="Rechercher" component={SearchStackScreen}/>
      <Tabs.Screen name="Favoris" component={FavorisStackScreen}/>
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
      <FavorisStack.Screen>

      </FavorisStack.Screen>
      {/* <FavorisStack.Screen></FavorisStack.Screen> */}
    </FavorisStack.Navigator>
  )
}