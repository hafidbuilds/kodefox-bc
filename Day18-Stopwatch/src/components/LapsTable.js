import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Lap} from './Lap';

export const LapsTable = ({laps, timeElapsed, lapsInterval}) => {
  return (
    <ScrollView style={styles.scrollView}>
      {laps.map((lap, index) => {
        const interval = lap - laps[laps.length - 1];
        return (
          <Lap
            lapNumber={index === 0 ? '' : index + 1}
            key={index + 1}
            timeElapsed={index === 0 ? timeElapsed : lap}
            lapsInterval={index === 0 ? lapsInterval : interval}
          />
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    alignSelf: 'stretch',
  },
});
