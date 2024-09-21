'use strict';
import {Dimensions, PixelRatio, Platform, Settings} from 'react-native';

export const AppDimensions = Object.freeze({
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  windowHeight: Dimensions.get('window').height,
  windowWidth: Dimensions.get('window').width,
  pixelRatio: PixelRatio.get(),
});

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'ios';

export const AppScreens = Object.freeze({
  Home: 'Home',
  Profile: 'Profile',
  Settings: 'Settings',
  Search: 'Search',
});
