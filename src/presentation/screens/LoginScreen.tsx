import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Button} from 'react-native-paper';

export const LoginScreen = () => {
  const [selectedType, setSelectedType] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Ajusta según sea necesario
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.headerContainer}>
            <Icon name="accessibility-outline" size={45} style={styles.icon} />
            <Text style={styles.headerTitle}>Banco de la Argentina</Text>
          </View>
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
            <Button style={styles.button} mode="outlined">
              <Text style={styles.buttonText}>INGRESAR</Text>
            </Button>
          </View>
          <View style={styles.footContainer}>
            <Text numberOfLines={3} style={styles.footerText}>
              Si aún no cuenta con sus credenciales realice aquí su solicitud de
              ingreso
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#00435e',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
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
  boxConatiner: {
    width: '100%',
  },
});

export default LoginScreen;
