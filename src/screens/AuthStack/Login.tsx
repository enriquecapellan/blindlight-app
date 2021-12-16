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
import { Image } from 'react-native';

type SignInScreenProps = {
  navigation: MainNavigationProp<MainRoutes.SignIn>;
};

const Login = ({ navigation }: SignInScreenProps) => {
  const [, dispatch] = useAuth();
  const [isLoading, setLoading] = useState(false);

  const [{ username, password }, setSate] = useState({
    username: '',
    password: '',
  });

  async function handleLogin() {
    setLoading(true);
    try {
      await signIn(username, password, dispatch);
    } finally {
      setLoading(false);
    }
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
      <Image
        style={{ width: 100, height: 100, marginTop: -50, marginBottom: 20 }}
        source={require('./../../assets/icon.png')}
      />
      <Label space={20}>Iniciar Sesión</Label>
      <Input
        value={username}
        placeholder="Correo electrónico"
        onChangeText={value => setSate({ password, username: value })}
      />
      <Input
        value={password}
        secureTextEntry={true}
        placeholder="Contraseña"
        onChangeText={value => setSate({ username, password: value })}
      />
      <Button isLoading={isLoading} label="Entrar" type="PRIMARY" onPress={handleLogin} />
      <Button
        label="Registrarse"
        onPress={() => navigation.navigate(MainRoutes.SignUp)}
      />
    </Screen>
  );
};

export default Login;
