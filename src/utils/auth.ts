import { saveToken, removeToken, getToken } from './storage';

export const onSignIn = (token: string) => saveToken(token);

export const onSignOut = () => removeToken();

export const isLoggedIn = async () => {
  return new Promise(
    (
      resolve: ({ value, token }: { value: boolean; token: string }) => void,
      reject: (error: any) => void,
    ) => {
      getToken()
        .then((token: string | null | undefined) =>
          resolve({ value: Boolean(token), token: token || '' }),
        )
        .catch((error: any) => reject(error));
    },
  );
};
