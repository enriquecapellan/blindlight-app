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

const SCREENS_OPTIONS = {
  options: { headerShown: false },
};

const MainNavigation: React.FC = () => {
  const [{ isLoggedIn }] = useAuth();

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        {isLoggedIn ? (
          <>
            <MainStack.Screen name={MainRoutes.Home} component={Home} {...SCREENS_OPTIONS} />
            <MainStack.Screen name={MainRoutes.Vision} component={Vision} {...SCREENS_OPTIONS} />
            <MainStack.Screen name={MainRoutes.HelpMe} component={HelpMe} {...SCREENS_OPTIONS} />
            <MainStack.Screen name={MainRoutes.GeoInfo} component={GeoInfo} {...SCREENS_OPTIONS} />
            <MainStack.Screen name={MainRoutes.Settings} component={Settings} {...SCREENS_OPTIONS} />
          </>
        ) : (
          <>
            <MainStack.Screen name={MainRoutes.SignIn} component={Login} {...SCREENS_OPTIONS} />
            <MainStack.Screen name={MainRoutes.SignUp} component={Register} {...SCREENS_OPTIONS}/>
          </>
        )}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
