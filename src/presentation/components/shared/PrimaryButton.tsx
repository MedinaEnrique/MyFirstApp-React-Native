import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

interface Props {
  label: string;
  onPress?: () => void;
}
const PrimaryButton = ({label, onPress}: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.textButton}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  buttonPressed: {
    padding: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    margin: 10,
    backgroundColor: '#80ff80',
    borderRadius: 10,
  },
  textButton: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#006633',
  },
});
