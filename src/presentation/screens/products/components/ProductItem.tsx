import {RouteProp, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParamList} from '../../../routes/StackNavigator';

const ProductItem = () => {
  const params = useRoute<RouteProp<RootStackParamList, 'Item'>>().params;
  return (
    <View>
      <Text>
        {params.id} - {params.name}
      </Text>
      <Text>{params.description}</Text>
    </View>
  );
};

export default ProductItem;
