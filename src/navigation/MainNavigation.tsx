import React, { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import Login from './../screens/AuthStack/Login';
import Register from './../screens/AuthStack/Register';
import Home from './../screens/AppStack/Home';
import Vision from './../screens/AppStack/Vision';
import HelpMe from './../screens/AppStack/HelpMe';
import GeoInfo from './../screens/AppStack/GeoInfo';
import Settings from './../screens/AppStack/Settings';

import useAuth from './../hooks/useAuth';

import MainStack, { MainRoutes } from './routes';
import { Button } from 'react-native';

const SCREENS_OPTIONS = {
  options: { headerShown: true, headerShadowVisible: false },
};

const MainNavigation: React.FC = () => {
  const [{ isLoggedIn }] = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isLoggedIn ? (
          <>
            <MainStack.Screen
              name={MainRoutes.Home}
              component={Home}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name={MainRoutes.Vision}
              component={Vision}
              options={({ navigation }) => ({
                title: '',
                headerBackTitle: 'Volver',
                headerRight: () => (
                  <Button
                    onPress={() => navigation.navigate(MainRoutes.Settings)}
                    title="Configuración"
                  />
                ),
              })}
            />
            <MainStack.Screen
              name={MainRoutes.HelpMe}
              component={HelpMe}
              {...SCREENS_OPTIONS}
            />
            <MainStack.Screen
              name={MainRoutes.GeoInfo}
              component={GeoInfo}
              options={{
                title: 'Lugares Cercanos',
                headerBackTitle: 'Volver',
                headerRight: () => (
                  <Button onPress={() => {}} title="Recargar" />
                ),
              }}
            />
            <MainStack.Screen
              name={MainRoutes.Settings}
              component={Settings}
              options={{
                title: 'Configuración',
                headerBackTitle: 'Volver',
                headerShadowVisible: false,
              }}
            />
          </>
        ) : (
          <>
            <MainStack.Screen
              name={MainRoutes.SignIn}
              component={Login}
              options={{ headerShown: false }}
            />
            <MainStack.Screen
              name={MainRoutes.SignUp}
              component={Register}
              options={{ headerShown: false }}
            />
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
