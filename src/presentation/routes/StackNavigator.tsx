import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {SideMenuNavigator} from './SideMenuNavigator';
import {ItemScreen} from '../screens/item/ItemScreen';
import {LoginScreen} from '../screens/login/LoginScreen';
import ProductScreen from '../screens/products/ProductScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

export type RootStackParamList = {
  Login: undefined;
  Products: undefined;
  Settings: undefined;
  Item: {id: number; name: string; description: string};
  HomeDrawer: undefined;
  Tabs: undefined;
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
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeDrawer"
        component={SideMenuNavigator}
      />
      <Stack.Screen name="Products" component={ProductScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Item" component={ItemScreen} />
    </Stack.Navigator>
  );
};
