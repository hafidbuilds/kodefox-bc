import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Lap from './Lap';

const LapsTable = ({laps}) => {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => (
        <Lap number={index} interval={lap} key={index} />
      ))}
    </ScrollView>
  );
};

export default LapsTable;

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: 'stretch',
  },
});
