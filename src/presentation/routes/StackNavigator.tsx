import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from '../screens/login/LoginScreen';
import {HomeScreen} from '../screens/Home/HomeScreen';
import ProductScreen from '../screens/products/ProductScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';
import {ItemScreen} from '../screens/item/ItemScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Products: undefined;
  Settings: undefined;
  Item: {id: number; name: string; description: string};
};

const Stack = createStackNavigator<RootStackParamList>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
    </Stack.Navigator>
  );
};
