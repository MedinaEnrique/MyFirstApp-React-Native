import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import SettingsScreen from '../screens/settings/SettingsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
