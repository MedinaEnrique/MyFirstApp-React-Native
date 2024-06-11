import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Product} from '../../products/ProductScreen';
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
const ItemView = ({id, name, description}: Product) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {id} - {name}
      </Text>
      <Text>{description}</Text>
    </View>
  );
};

export default ItemView;
