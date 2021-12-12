import React from 'react';
import { Image } from 'react-native';

import Screen from './../../components/screen';
import Button from './../../components/button';

import { MainRoutes } from './../../navigation/routes';
import { MainNavigationProp } from './../../navigation/types';

import { signOut } from './../../context/auth';
import useAuth from './../../hooks/useAuth';

type HomeScreenProps = {
  navigation: MainNavigationProp<MainRoutes.SignIn>;
};

const Home = ({ navigation }: HomeScreenProps) => {
  const [, dispatch] = useAuth();

  return (
    <Screen>
      <Image
        style={{ width: 100, height: 100, marginTop: -25, marginBottom: 15 }}
        source={require('./../../assets/icon.png')}
      />
      <Button
        label="Visión"
        type="PRIMARY"
        onPress={() => navigation.navigate(MainRoutes.Vision)}
      />
      <Button
        label="Lugares Cercanos"
        type="PRIMARY"
        onPress={() => navigation.navigate(MainRoutes.GeoInfo)}
      />
      <Button
        label="Salir"
        type="SECONDARY"
        onPress={() => signOut(dispatch)}
      />
    </Screen>
  );
};

export default Home;
