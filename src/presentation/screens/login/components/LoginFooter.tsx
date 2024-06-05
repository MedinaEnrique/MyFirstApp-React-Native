import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  footContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 17,
    color: '#e6eff3',
    marginHorizontal: 20,
  },
});
const LoginFooter = () => {
  return (
    <View style={styles.footContainer}>
      <Text numberOfLines={3} style={styles.footerText}>
        Si aún no cuenta con sus credenciales realice aquí su solicitud de
        ingreso
      </Text>
    </View>
  );
};

export default LoginFooter;
