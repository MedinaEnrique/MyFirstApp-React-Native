import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {type NavigationProp, useNavigation} from '@react-navigation/native';
import {type RootStackParamList} from '../../../routes/StackNavigator';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../../store/store';
import {decrement, increment} from '../../../../store/counterReducer';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 30,
  },
  text: {
    color: 'black',
    fontSize: 60,
    alignSelf: 'center',
  },
});
export const HomeContent = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const {value} = useSelector((state: RootState) => state.counter);
  return (
    <View style={styles.container}>
      <PrimaryButton
        label={'PRODUCTS'}
        onPress={() => navigation.navigate('Products')}
      />
      <PrimaryButton
        label={'SETTINGS'}
        onPress={() => navigation.navigate('Settings')}
      />
      <Text style={styles.text}>{value}</Text>
      <PrimaryButton
        label={'DECREMENT'}
        onPress={() => dispatch(decrement())}
      />
      <PrimaryButton
        label={'INCREMENT'}
        onPress={() => dispatch(increment())}
      />
    </View>
  );
};
