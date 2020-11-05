import React from 'react';
import { View } from 'react-native';

import RootStack from './Navigation/Navigation'
// import Menu from './Menu'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <RootStack />
      {/* <Menu /> */}
    </View>
  );
}

