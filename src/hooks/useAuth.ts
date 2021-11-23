import { AuthContext } from './../context/auth';
import { Dispatch, useContext } from 'react';

export default function useAuth(): [AuthState, Dispatch<AuthActions>] {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('useAuth must be used within a AuthProvider');
  }

  return context;
}
