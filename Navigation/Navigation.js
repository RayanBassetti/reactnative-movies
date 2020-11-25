import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from '../components/Search'
import Favorites from '../components/Favorites'
import FilmDetail from '../components/FilmDetail'
import Test from '../components/Test'
import { Image, StyleSheet, Button, Text } from 'react-native';

// https://www.youtube.com/watch?v=nQVCkqvU1uE

const SearchStack = createStackNavigator()
const FavorisStack = createStackNavigator()
const TestStack = createStackNavigator()
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
          } else if (route.name === 'Test') {
            return <Image style={styles.iconStyle} source={require('../assets/ic_favorite.png')} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
        activeBackgroundColor: '#DDDDDD', // Couleur d'arrière-plan de l'onglet sélectionné
        inactiveBackgroundColor: '#FFFFFF', // Couleur d'arrière-plan des onglets non sélectionnés
        // showLabel: false, // On masque les titres
        // showIcon: true // On informe le TabNavigator qu'on souhaite afficher les icônes définis
      }}
    >
      <Tabs.Screen 
        name="Test" 
        component={TestStackScreen}
      />
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
      >
        {props => <Search {...props}/>}
      </SearchStack.Screen>

      <SearchStack.Screen
        name="FilmDetail"
        options={{ 
          title: 'Détail du film'
        }}
      >
        {props => <FilmDetail {...props}/>}
      </SearchStack.Screen>
    </SearchStack.Navigator>
  )
}

function FavorisStackScreen() {
  return (
    <FavorisStack.Navigator
    initialRouteName="Favoris"
    screenOptions={{ gestureEnabled: false }}
    >
      <FavorisStack.Screen        
        name="Favoris"
        options={{ title: 'Films favoris' }}
      >
        {props => <Favorites {...props}/>}

      </FavorisStack.Screen>
      <FavorisStack.Screen        
        name="FilmDetail"
        options={{ title: 'Détail du film' }}
      >
        {props => <FilmDetail {...props}/>}

      </FavorisStack.Screen>
      {/* <FavorisStack.Screen></FavorisStack.Screen> */}
    </FavorisStack.Navigator>
  )
}

function TestStackScreen() {
  return (
    <TestStack.Navigator
    initialRouteName="Test"
    screenOptions={{ gestureEnabled: false }}
    >
      <TestStack.Screen        
        name="Test"
        options={{ title: 'Mes tests' }}
      >
        {props => <Test {...props}/>}

      </TestStack.Screen>
    </TestStack.Navigator>
  )
}