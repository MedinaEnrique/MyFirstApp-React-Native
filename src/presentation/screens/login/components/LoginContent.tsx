import {Picker} from '@react-native-picker/picker';
import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {LoginViewProps} from './LoginView';
import {PrimaryButton} from '../../../components/shared/PrimaryButton';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  subContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#e6eff3',
    padding: 20,
    borderRadius: 15,
    marginVertical: 20,
  },
  subContainerText: {
    fontSize: 15,
    color: '#00435e',
    fontFamily: 'sans-serif-medium',
    marginVertical: 5,
  },
  boxConatiner: {
    width: '100%',
  },
  input: {
    borderColor: '#00435e',
    borderRadius: 10,
    color: '#00435e',
    height: 50,
    width: '100%',
    marginVertical: 12,
    borderWidth: 2,
    padding: 10,
  },
  pickerContainer: {
    borderColor: '#00435e',
    borderRadius: 10,
    borderWidth: 2,
    marginVertical: 2,
    width: '100%',
  },
  picker: {
    width: '100%',
    color: '#00435e',
  },
});
export const LoginContent = ({
  selectedType,
  setSelectedType,
  type,
  setType,
  password,
  setPassword,
}: LoginViewProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.subContainer}>
      <View style={styles.boxConatiner}>
        <Text style={styles.subContainerText}>TIPO</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedType}
            style={styles.picker}
            onValueChange={itemValue => setSelectedType(itemValue)}>
            <Picker.Item label="Seleccione" value="" />
            <Picker.Item label="CI - Paraguayo" value="tipo1" />
            <Picker.Item label="CI - Argentino" value="tipo2" />
            <Picker.Item label="CI - Brasilero" value="tipo3" />
            <Picker.Item label="CI - Boliviano" value="tipo4" />
          </Picker>
        </View>
      </View>
      <View style={styles.boxConatiner}>
        <Text style={styles.subContainerText}>NÚMERO</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de documento"
          placeholderTextColor="#00435e"
          value={type}
          onChangeText={setType}
        />
      </View>
      <View style={styles.boxConatiner}>
        <Text style={styles.subContainerText}>CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="PIN de acceso"
          placeholderTextColor="#00435e"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <PrimaryButton
        label={'INGRESAR'}
        onPress={() => navigation.navigate('HomeDrawer' as never)}
      />
      {/* <Button
        style={styles.button}
        mode="outlined"
        onPress={() => navigation.navigate('Home' as never)}>
        <Text style={styles.buttonText}>INGRESAR</Text>
      </Button> */}
    </View>
  );
};
