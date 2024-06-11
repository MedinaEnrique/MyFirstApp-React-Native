import React from 'react';
import {View} from 'react-native';
import ProductView from './components/ProductView';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParamList} from '../../routes/StackNavigator';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

export type Product = {
  id: number;
  name: string;
  description: string;
};

export type ProductProps = {
  products: Product[];
  navigation: any;
};
const ProductScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const products = useSelector((state: RootState) => state.products.products);

  return (
    <View>
      <ProductView products={products} navigation={navigation} />
    </View>
  );
};

export default ProductScreen;
