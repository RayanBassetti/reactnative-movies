import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';

import {data} from '../Helpers/Data'

import Search from './Search'
// import Menu from './Menu'

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Search data={data}/>
      {/* <Menu /> */}
    </View>
  );
}

