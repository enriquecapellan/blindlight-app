import { createNativeStackNavigator } from '@react-navigation/native-stack';

export enum MainRoutes {
  SignIn = 'SignIn',
  SignUp = 'SignUp',

  AppLoading = 'AppLoading',
  Home = 'Home',
  Settings = 'Settings',
  HelpMe = 'HelpMe',
  Vision = 'Vision',
  GeoInfo = 'GeoInfo',
}

export type MainStackParamList = {
  // Auth Stack
  [MainRoutes.SignIn]: undefined
  [MainRoutes.SignUp]: undefined

  // App Stack
  [MainRoutes.AppLoading]: undefined
  [MainRoutes.Home]: undefined
  [MainRoutes.Settings]: undefined
  [MainRoutes.HelpMe]: undefined
  [MainRoutes.Vision]: undefined
  [MainRoutes.GeoInfo]: undefined
}

const MainStack = createNativeStackNavigator<MainStackParamList>()
export default MainStack