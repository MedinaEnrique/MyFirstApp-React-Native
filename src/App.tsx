import React from 'react';
import 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {Provider} from 'react-redux';
import {store} from './store/store';
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider
          settings={{
            icon: props => <IonIcon {...props} />,
          }}>
          <StackNavigator />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
