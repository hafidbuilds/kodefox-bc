// @flow
import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import {Header} from 'react-native-elements';

import type {Route} from '../types/Routes';

type Props = {
  navigateTo: (newRoute: Route) => void,
  goBack: () => void,
};

export const Home = (props: Props) => {
  const {navigateTo} = props;
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{icon: 'menu', color: '#fff'}}
        centerComponent={{text: 'Image Hunt', style: {color: '#fff'}}}
        rightComponent={{icon: 'home', color: '#fff'}}
      />
      <Button onPress={() => navigateTo('SEARCH')} title="Search Images" />
      <Button onPress={() => navigateTo('FAVORITES')} title="Favorites" />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
