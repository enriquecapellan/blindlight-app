import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import AuthProvider from './context/auth';
import MainNavigation from './navigation/MainNavigation';

import AppProvider from './context/app';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <AuthProvider>
        <AppProvider>
          <MainNavigation />
        </AppProvider>
      </AuthProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    backgroundColor: 'white',
    padding: 16,
    width: '100%',
  },
  text: {
    width: '100%',
    textAlign: 'center',
    fontSize: 25,
  },
  loading: {
    width: '100%',
  },
});

export default App;
