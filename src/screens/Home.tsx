import {Button, StyleSheet, View} from 'react-native';
import React, {memo, useCallback} from 'react';
import {ScreenProps} from '../navigation/navigation.types';
import {AppScreens} from '../constants';

const Home = ({navigation}: ScreenProps<'Home'>) => {
  const navHandler = useCallback((screen: keyof typeof AppScreens) => {
    navigation.navigate(screen);
  }, []);

  return (
    <View style={styles.home}>
      <Button title="Profile" onPress={navHandler.bind(null, 'Profile')} />
      <Button title="Search" onPress={navHandler.bind(null, 'Search')} />
      <Button title="Settings" onPress={navHandler.bind(null, 'Settings')} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {flex: 1, justifyContent: 'center', alignItems: 'center', gap: 20},
});

export default memo(Home);
