import {NavigationProp, RouteProp} from '@react-navigation/native';
import {AppScreens} from '../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AppStackParamList = {
  [AppScreens.Home]: undefined;
  [AppScreens.Profile]: undefined;
  [AppScreens.Settings]: undefined;
  [AppScreens.Search]: undefined;
};

export type RootNavigations = NativeStackNavigationProp<AppStackParamList>;

export type ScreenProps<
  S extends keyof AppStackParamList = keyof AppStackParamList,
> = {
  navigation: RootNavigations;
  route: RouteProp<AppStackParamList, S>;
};

///for hooks
export type useNavigationType = NavigationProp<AppStackParamList>;
