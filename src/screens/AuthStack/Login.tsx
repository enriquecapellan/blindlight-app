import React, { useState, useEffect } from 'react';

import Button from './../../components/button';
import Input from './../../components/input';
import Label from './../../components/label';
import Screen from './../../components/screen';

import { MainNavigationProp } from './../../navigation/types';
import { MainRoutes } from './../../navigation/routes';

import useAuth from './../../hooks/useAuth';

import { signIn } from './../../context/auth';
import { isLoggedIn } from './../../utils/auth';

type SignInScreenProps = {
  navigation: MainNavigationProp<MainRoutes.SignIn>;
};

const Login = ({ navigation }: SignInScreenProps) => {
  const [, dispatch] = useAuth();

  const [{ username, password }, setSate] = useState({
    username: '',
    password: '',
  });

  async function handleLogin() {
    signIn(username, password, dispatch);
  }

  useEffect(() => {
    async function checkLogin() {
      await isLoggedIn().then(({ value, token }) => {
        if (value) dispatch({ type: 'SIGN_IN', token });
      });
    }

    checkLogin();
  }, []);


  return (
    <Screen>
      <Label>Log In</Label>
      <Input
        value={username}
        placeholder="Nombre de Usuario"
        onChangeText={value => setSate({ password, username: value })}
      />
      <Input
        value={password}
        secureTextEntry={true}
        placeholder="Contraseña"
        onChangeText={value => setSate({ username, password: value })}
      />
      <Button label="Entrar" type="PRIMARY" onPress={handleLogin} />
      <Button
        label="Registrarse"
        onPress={() => navigation.navigate(MainRoutes.SignUp)}
      />
    </Screen>
  );
};

export default Login;
