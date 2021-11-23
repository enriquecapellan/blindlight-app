import React from 'react';

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
      <Button
        label="Información Geográfica"
        type="PRIMARY"
        onPress={() => navigation.navigate(MainRoutes.GeoInfo)}
      />
      <Button
        label="Visión"
        type="PRIMARY"
        onPress={() => navigation.navigate(MainRoutes.Vision)}
      />
      <Button
        label="Ayuda"
        type="PRIMARY"
        onPress={() => navigation.navigate(MainRoutes.HelpMe)}
      />
      <Button
        label="Configuración"
        type="SECONDARY"
        onPress={() => navigation.navigate(MainRoutes.Settings)}
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
