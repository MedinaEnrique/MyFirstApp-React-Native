import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Box Object Model</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#021d24',
  },
  subContainer: {
    alignItems: 'center',
    backgroundColor: '#7498b6',
    marginHorizontal: 65,
    borderRadius: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    padding: 5,
  },
});
