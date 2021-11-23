import { login } from './../api';
import { onSignIn, onSignOut } from './../utils/auth';
import React, { createContext, Dispatch, FC, useReducer } from 'react';

export const AuthContext = createContext<
  [AuthState, Dispatch<AuthActions>] | undefined
>(undefined);

function reducer(prevState: AuthState, action: AuthActions): AuthState {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...prevState,
        isLoading: false,
        userToken: action.token,
      };

    case 'SIGN_IN':
      return {
        ...prevState,
        isLoading: false,
        isLoggedIn: true,
        userToken: action.token,
      };

    case 'SIGN_OUT':
      return {
        ...prevState,
        isLoggedIn: false,
        userToken: undefined,
      };

    case 'START_LOADING':
      return {
        ...prevState,
        isLoading: true,
      };
    
    
    case 'STOP_LOADING':
      return {
        ...prevState,
        isLoading: false,
      };
  }
}

const AuthProvider: FC = ({ children }) => {
  const value = useReducer(reducer, {
    isLoading: true,
    isLoggedIn: false,
    userToken: undefined,
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

async function signIn(
  user: string,
  password: string,
  dispatch: Dispatch<AuthActions>,
) {
  dispatch({ type: 'START_LOADING' });
  try {
    const { data } = await login(user, password);
    const token = data.access_token;
    await onSignIn(token);
    dispatch({ type: 'SIGN_IN', token });
  } catch {
    dispatch({ type: 'STOP_LOADING'})
  }
}

async function signOut(dispatch: Dispatch<AuthActions>) {
  dispatch({ type: 'SIGN_OUT' });
  onSignOut();
}

export { signIn, signOut };

export default AuthProvider;
