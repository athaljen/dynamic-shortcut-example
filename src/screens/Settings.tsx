import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ScreenProps} from '../navigation/navigation.types';

const Settings = ({}: ScreenProps<'Settings'>) => {
  return (
    <View>
      <Text>Settings</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Settings);
