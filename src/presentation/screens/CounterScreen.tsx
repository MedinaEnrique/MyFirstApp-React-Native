import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return (
    <View style={styles.container}>
      <Pressable
        onPress={decrement}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.textButton}>-</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Text style={styles.title}> {counter} </Text>
        <Pressable
          onPress={reset}
          style={({pressed}) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}>
          <Text style={styles.textButton}>Reestablecer</Text>
        </Pressable>
      </View>
      <Pressable
        onPress={increment}
        style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006633',
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 45,
    padding: 20,
    fontWeight: 'bold',
    color: 'white',
  },
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
