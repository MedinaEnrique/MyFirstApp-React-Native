import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomTabsNavigator} from './BottomTabsNavigator';
import {HomeScreen} from '../screens/Home/HomeScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';

export type DrawerParamList = {
  Home: undefined;
  Profile: undefined;
  Tabs: undefined;
};
const styles = StyleSheet.create({
  drawerContentStyles: {
    height: 100,
    backgroundColor: '#057EA3',
    margin: 30,
    borderRadius: 50,
  },
});
const Drawer = createDrawerNavigator<DrawerParamList>();
export const SideMenuNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#057EA3',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: '#057EA3',
        drawerLabelStyle: {fontSize: 15, fontWeight: 'bold'},
        drawerItemStyle: {borderRadius: 100, paddingHorizontal: 20},
      }}>
      <Drawer.Screen
        options={{
          headerShown: true,
        }}
        name="Tabs"
        component={BottomTabsNavigator}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
        }}
        name="Home"
        component={HomeScreen}
      />
      <Drawer.Screen
        options={{
          headerShown: true,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Drawer.Navigator>
  );
};

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.drawerContentStyles} />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};
