interface AuthState {
  isLoggedIn: boolean;
  isLoading: boolean;
  userToken: string | undefined;
}

type RestoreToken = {
  readonly type: 'RESTORE_TOKEN';
  readonly token: string | undefined;
};

type SignIn = {
  readonly type: 'SIGN_IN';
  readonly token: string | undefined;
};

type SignOut = {
  readonly type: 'SIGN_OUT';
};

type StartLoading = {
  readonly type: 'START_LOADING';
};

type StopLoading = {
  readonly type: 'STOP_LOADING';
};

type AuthActions = RestoreToken | SignIn | SignOut | StartLoading | StopLoading;

type AppState = {
  vision: {
    generate_description: boolean;
    extract_labels: boolean;
    extract_text: boolean;
    activateFlash: boolean;
  };
};
