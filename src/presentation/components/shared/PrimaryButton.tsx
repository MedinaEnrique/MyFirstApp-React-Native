import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00435e',
    borderRadius: 20,
    height: 50,
    width: '100%',
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#e6eff3',
    fontSize: 15,
  },
});
export const PrimaryButton = ({label, onPress}: PrimaryButtonProps) => {
  return (
    <Pressable onPress={onPress} style={[styles.button]}>
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
};
