import React from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import LoginHeader from './LoginHeader';
import {LoginContent} from './LoginContent';
import LoginFooter from './LoginFooter';

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
});

export interface LoginViewProps {
  selectedType: string;
  setSelectedType: (value: string) => void;
  type: string;
  setType: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const LoginView = ({
  selectedType,
  setSelectedType,
  type,
  setType,
  password,
  setPassword,
}: LoginViewProps) => {
  return (
    <KeyboardAvoidingView
      style={styles.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <LoginHeader />
          <LoginContent
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            type={type}
            setType={setType}
            password={password}
            setPassword={setPassword}
          />
          <LoginFooter />
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default LoginView;
