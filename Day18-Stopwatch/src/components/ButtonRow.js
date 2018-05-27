import React from 'react';
import {View, StyleSheet} from 'react-native';

export const ButtonRow = ({children}) => {
  return <View style={styles.buttonRow}>{children}</View>;
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 130,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});
