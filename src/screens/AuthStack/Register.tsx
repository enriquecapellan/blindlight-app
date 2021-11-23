import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';

import Button from './../../components/button';
import Input from './../../components/input';
import Label from './../../components/label';
import Screen from './../../components/screen';

import { onSignIn } from './../../utils/auth';

import { MainNavigationProp } from './../../navigation/types';
import { MainRoutes } from './../../navigation/routes';

type SignInScreenProps = {
  navigation: MainNavigationProp<MainRoutes.SignIn>;
};

const Register = ({ navigation }: SignInScreenProps) => {
  const [email, setEmail] = useState('');

  async function register() {
    
  }

  return (
    <Screen>
      <Label>Registrarse</Label>
      <Input
        value={email}
        placeholder="Correo electrónico"
        onChangeText={setEmail}
      />
      <Button label="Registrarse" type="PRIMARY" onPress={register} />
      <Button
        label="Iniciar Sesión"
        onPress={() => navigation.navigate(MainRoutes.SignIn)}
      />
    </Screen>
  );
};

export default Register;
