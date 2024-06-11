import React from 'react';
import {View} from 'react-native';
import {ProductContent} from './ProductContent';
import {ProductProps} from '../ProductScreen';

const ProductView = ({products, navigation}: ProductProps) => {
  return (
    <View>
      <ProductContent products={products} navigation={navigation} />
    </View>
  );
};

export default ProductView;
