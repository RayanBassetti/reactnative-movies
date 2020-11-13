import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'
import Store from './Store/configureStore'


import TabsScreens from './Navigation/Navigation'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Provider store={Store}>
        <NavigationContainer>
          <TabsScreens />
        </NavigationContainer>
      </Provider>
    </View>
  );
}

