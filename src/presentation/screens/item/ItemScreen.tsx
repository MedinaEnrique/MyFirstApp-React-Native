import React, {useEffect} from 'react';
import {RouteProp, useRoute} from '@react-navigation/native';
import {View} from 'react-native';
import ItemView from './components/ItemView';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../routes/StackNavigator';

export const ItemScreen = () => {
  const itemData = useRoute<RouteProp<RootStackParamList, 'Item'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: itemData.name,
    });
  }, [itemData.name, navigation]);
  return (
    <View>
      <ItemView
        id={itemData.id}
        name={itemData.name}
        description={itemData.description}
      />
    </View>
  );
};
