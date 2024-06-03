/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';

function App() {
  return (
    <PaperProvider>
      <View style={{flex: 1}}>
        <HelloWorldScreen name="David" />
        <CounterScreen />
      </View>
    </PaperProvider>
  );
}
export default App;
