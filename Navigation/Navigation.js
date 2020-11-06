import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../components/Search'
import Home from '../components/Home'
import FilmDetail from '../components/FilmDetail'

const Stack = createStackNavigator();
function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Rechercher"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Rechercher"
        options={{ title: 'Rechercher' }}
      >
        {props => <Search {...props}/>}
      </Stack.Screen>

      <Stack.Screen
        name="FilmDetail"
        options={{ title: 'Détail du film' }}
      >
        {props => <FilmDetail {...props}/>}
      </Stack.Screen>

    </Stack.Navigator>
  );
}

export default Routes