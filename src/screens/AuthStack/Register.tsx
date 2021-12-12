import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/core';

import Button from './../../components/button';
import Input from './../../components/input';
import Label from './../../components/label';
import Screen from './../../components/screen';

import { onSignIn } from './../../utils/auth';

import { MainNavigationProp } from './../../navigation/types';
import { MainRoutes } from './../../navigation/routes';
import { Image } from 'react-native';

type SignInScreenProps = {
  navigation: MainNavigationProp<MainRoutes.SignIn>;
};

const Register = ({ navigation }: SignInScreenProps) => {
  async function register() {}

  return (
    <Screen>
      <Image
        style={{ width: 100, height: 100, marginTop: -50, marginBottom: 20 }}
        source={require('./../../assets/icon.png')}
      />
      <Label space={20}>Registrarse</Label>
      <Input placeholder="Nombre completo" />
      <Input placeholder="Correo electrónico" />
      <Input placeholder="Contraseña" />
      <Input placeholder="Confirmar contraseña" />
      <Button label="Registrarse" type="PRIMARY" onPress={register} />
      <Button
        label="Iniciar Sesión"
        onPress={() => navigation.navigate(MainRoutes.SignIn)}
      />
    </Screen>
  );
};

export default Register;
