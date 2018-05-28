import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Timer} from './Timer';
import moment from 'moment';

export const Lap = ({lapNumber, timeElapsed, lapsInterval}) => {
  return (
    <View style={styles.lap}>
      <Text style={styles.lapText}>Lap {lapNumber}</Text>
      <Timer style={styles.lapText} timeElapsed={timeElapsed} />
      <LapsInterval
        style={[styles.lapText, {color: '#50D167'}]}
        lapsInterval={lapsInterval}
      />
    </View>
  );
};

const LapsInterval = ({lapsInterval, style}) => {
  const padding = (n) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(lapsInterval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  return (
    <Text style={[styles.timer, style]}>
      + {padding(duration.minutes())}:
      {padding(duration.seconds())},
      {padding(centiseconds)}
    </Text>
  );
};

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
  timer: {
    color: 'white',
    fontSize: 76,
    fontWeight: '200',
  },
});
