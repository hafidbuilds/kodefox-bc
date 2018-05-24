// @flow
import React from 'react';
import {StyleSheet, Button, View} from 'react-native';

import type {Route} from '../types/Routes';

type Props = {
  navigateTo: (newRoute: Route) => void;
  goBack: () => void;
};

export const Favorites = (props: Props) => {
  const {goBack} = props;
  return (
    <View style={styles.container}>
      <Button onPress={() => goBack()} title="Go Back" />
    </View>
  );
};

let styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
