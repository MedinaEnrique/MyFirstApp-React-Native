/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <View style={{flex: 1}}>
        <HelloWorldScreen name="David" />
        <CounterScreen />
      </View>
    </PaperProvider>
  );
}
export default App;
