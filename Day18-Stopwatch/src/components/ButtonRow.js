import React from 'react';
import {View, StyleSheet} from 'react-native';

const ButtonRow = ({children}) => {
  return <View style={styles.buttonRow}>{children}</View>;
};

export default ButtonRow;

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 150,
    borderWidth: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignSelf: 'stretch',
    marginBottom: 20,
  },
});
