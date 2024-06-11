import React from 'react';
import {View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {PropsSettings} from '../SettingsScreen';
import {StackActions} from '@react-navigation/native';

export const SettingView = ({navigator}: PropsSettings) => {
  return (
    <View>
      <PrimaryButton
        label="Regresar"
        onPress={() => {
          navigator.goBack();
        }}
      />
      <PrimaryButton
        label="Home"
        onPress={() => {
          navigator.dispatch(StackActions.popToTop());
        }}
      />
    </View>
  );
};
