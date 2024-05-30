/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';

function App() {
  return (
    <View style={{flex: 1}}>
      <HelloWorldScreen name="David" />
      <CounterScreen />
    </View>
  );
}
export default App;
