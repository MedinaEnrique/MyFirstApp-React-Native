import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {FAB} from 'react-native-paper';
import {globalStyles as styles} from '../theme/global.styles';

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const reset = () => setCounter(0);
  return (
    <View style={styles.centerContainer}>
      <View style={styles.subCenterContainer}>
        <Button mode="contained" onPress={decrement}>
          -
        </Button>
        <Button mode="contained" onPress={increment}>
          +
        </Button>
      </View>
      <Text style={styles.title}> {counter} </Text>
      <FAB style={styles.fab} onPress={reset} label="Reestablecer" />
    </View>
  );
};

export default CounterScreen;
