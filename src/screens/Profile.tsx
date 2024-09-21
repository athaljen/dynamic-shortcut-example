import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ScreenProps} from '../navigation/navigation.types';

const Profile = ({}: ScreenProps<'Profile'>) => {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Profile);
