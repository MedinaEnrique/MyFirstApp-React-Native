import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {FlatList} from 'react-native-gesture-handler';
import {ProductState, removeProduct} from '../../../../store/productReducer';
import {useDispatch} from 'react-redux';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  text: {
    marginVertical: 10,
    fontSize: 30,
    color: 'black',
    fontFamily: 'Roboto-Regular',
  },
});

export const ProductContent = ({products, navigation}: ProductState) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => (
          <PrimaryButton
            onPress={() => navigation.navigate('Item', item)}
            label={item.name}
          />
        )}
      />
      <PrimaryButton
        onPress={() => dispatch(removeProduct(products[0].id))}
        label={'Eliminar Producto'}
      />
    </View>
  );
};
