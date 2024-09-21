import {StyleSheet, Text, View} from 'react-native';
import React, {memo} from 'react';
import {ScreenProps} from '../navigation/navigation.types';

const Search = ({}: ScreenProps<'Search'>) => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(Search);
