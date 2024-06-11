import React, {useState} from 'react';
import LoginView from './components/LoginView';

export const LoginScreen = () => {
  const [selectedType, setSelectedType] = useState('');
  const [type, setType] = useState('');
  const [password, setPassword] = useState('');
  //Llamadas a Api's aqui tambien
  return (
    <LoginView
      selectedType={selectedType}
      setSelectedType={setSelectedType}
      type={type}
      setType={setType}
      password={password}
      setPassword={setPassword}
    />
  );
};
