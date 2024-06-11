import React from 'react';
import {View} from 'react-native';
import {SettingView} from './components/SettingView';
import {useNavigation} from '@react-navigation/native';

export interface PropsSettings {
  navigator: any;
}
export default function SettingsScreen() {
  const navigator = useNavigation();
  return (
    <View>
      <SettingView navigator={navigator} />
    </View>
  );
}
