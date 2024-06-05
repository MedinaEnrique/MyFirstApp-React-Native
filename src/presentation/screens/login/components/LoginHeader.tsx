import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 65,
    paddingBottom: 20,
  },
  headerTitle: {
    textAlign: 'center',
    fontSize: 29,
    color: '#e6eff3',
    padding: 5,
  },
  icon: {
    color: '#e6eff3',
  },
});

const LoginHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Icon name="accessibility-outline" size={45} style={styles.icon} />
      <Text style={styles.headerTitle}>Banco de la Argentina</Text>
    </View>
  );
};

export default LoginHeader;
