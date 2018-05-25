import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Lap = ({number, interval}) => {
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Lap {number}</Text>
      <Text style={styles.lapText}>{interval}</Text>
    </View>
  );
};

export default Lap;

const styles = StyleSheet.create({
  lapText: {
    color: 'white',
    fontSize: 18,
  },
  lap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'gray',
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
