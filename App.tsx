/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import LoginScreen from './src/presentation/screens/login/LoginScreen';
function App() {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <LoginScreen />
      </SafeAreaView>
    </PaperProvider>
  );
}
export default App;
