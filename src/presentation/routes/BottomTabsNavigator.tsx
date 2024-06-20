import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Text} from 'react-native';
import {TopTabsNavigator} from './TopTabsNavigator';
import Tab1Screen from '../screens/tabs/Tab1Screen';
import Tab3Screen from '../screens/tabs/Tab3Screen';

export type TabParamList = {
  Tab1: undefined;
  Tab2: undefined;
  Tab3: undefined;
};
const Tab = createBottomTabNavigator<TabParamList>();

export const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: 5,
        },
        headerStyle: {
          elevation: 0,
          borderColor: 'transparent',
        },
        tabBarStyle: {
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tab.Screen
        name="Tab1"
        options={{
          title: 'Tab1',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab1</Text>,
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2"
        options={{
          title: 'Tab2',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab2</Text>,
        }}
        component={TopTabsNavigator}
      />
      <Tab.Screen
        name="Tab3"
        options={{
          title: 'Tab3',
          tabBarIcon: ({color}) => <Text style={{color}}>Tab3</Text>,
        }}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
};
