import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View } from 'react-native';

import {data} from '../Helpers/Data'

import Search from './Search'
// import Menu from './Menu'

export default function App() {
  const [click, setClick] = useState(false)
  return (
    <View style={{flex: 1}}>
      <Search text="Du texte passé en props" data={data}/>
      {/* <Menu /> */}
    </View>
  );
}

