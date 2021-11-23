import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainRoutes, MainStackParamList } from './routes';

export type MainNavigationProp<
  RouteName extends keyof MainStackParamList = MainRoutes,
> = NativeStackNavigationProp<MainStackParamList, RouteName>;
