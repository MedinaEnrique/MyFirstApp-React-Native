import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  name?: string;
}

export default function HelloWorldScreen({name = 'Enrique'}: Props) {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} ellipsizeMode="middle" style={styles.title}>
        Hello {name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006633',
  },
  title: {
    fontSize: 45,
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
  },
});
