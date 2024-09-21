import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {memo, useEffect} from 'react';
import {AppStackParamList} from './navigation.types';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Search from '../screens/Search';
import Settings from '../screens/Settings';
import DynamicShortcut from 'react-native-dynamic-shortcut';
import {AppScreens, isIos} from '../constants';
import {DeviceEventEmitter} from 'react-native';

const Stack = createNativeStackNavigator<AppStackParamList>();

const navigationRef = createNavigationContainerRef<AppStackParamList>();

const shortcutItems: Array<DynamicShortcut.ShortcutItem> = [
  {
    type: 'profile',
    title: 'Profile',
    subtitle: 'See profile details',
    icon: isIos
      ? 'user'
      : 'https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp',
    userInfo: {
      url: 'app://profile',
    },
  },
  {
    type: 'search',
    title: 'Search',
    subtitle: 'Search for something',
    icon: 'search',
    userInfo: {
      url: 'app://search',
    },
  },
  {
    type: 'settings',
    title: 'Settings',
    subtitle: 'Change app settings',
    icon: 'settings',
    userInfo: {
      url: 'app://settings',
    },
  },
];

const handleClick = (data: (typeof shortcutItems)[0]) => {
  console.log('data', data);

  if (data) {
    if (data.type === 'profile') NavigateWithRef(AppScreens.Profile);
    else if (data.type === 'search') NavigateWithRef(AppScreens.Search);
    else if (data.type === 'settings') NavigateWithRef(AppScreens.Settings);
  }
};

const NavigateWithRef = (screen: keyof typeof AppScreens) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(screen);
  }
};

const Root = () => {
  useEffect(() => {
    DynamicShortcut.setShortcutItems(shortcutItems);
    DeviceEventEmitter.addListener('RNDynamicShortcut', handleClick);
    DynamicShortcut?.popInitialAction()
      .then(handleClick)
      .catch(() => {
        console.log('err:- initial action');
      });
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Root);
