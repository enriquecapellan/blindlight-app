import AsyncStorage from '@react-native-async-storage/async-storage';

const saveToken = async (token: string) => {
  try {
    await AsyncStorage.setItem('token', token);
  } catch (err) {
    console.log(err)
  }
};

const removeToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
  } catch (err) {}
};

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    return token;
  } catch (err) {}
};

export { getToken, saveToken, removeToken };
