import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


import RootStack from './Navigation/Navigation'
// import Menu from './Menu'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={Store}>
        <NavigationContainer>
          <RootStack />
          {/* <Menu /> */}
        </NavigationContainer>
      </Provider>
    </View>
  );
}

