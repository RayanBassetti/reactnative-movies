import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';


import RootStack from './Navigation/Navigation'
// import Menu from './Menu'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <RootStack />
        {/* <Menu /> */}
      </NavigationContainer>
    </View>
  );
}

