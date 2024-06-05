/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
// import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
// import CounterScreen from './src/presentation/screens/CounterScreen';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {LoginScreen} from './src/presentation/screens/LoginScreen';
// import {BoxObjectModelScreen} from './src/presentation/screens/BoxObjectModelScreen';
function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="David" /> */}
        {/* <CounterScreen /> */}
        {/* <BoxObjectModelScreen /> */}
        <LoginScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
export default App;
