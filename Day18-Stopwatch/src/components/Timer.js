import React from 'react';
import {Text, StyleSheet} from 'react-native';
import moment from 'moment';

export const Timer = ({timeElapsed, style}) => {
  const padding = (n) => (n < 10 ? '0' + n : n);
  const duration = moment.duration(timeElapsed);
  const centiseconds = Math.floor(duration.milliseconds() / 10);

  return (
    <Text style={[styles.timer, style]}>
      {padding(duration.minutes())}:
      {padding(duration.seconds())},
      {padding(centiseconds)}
    </Text>
  );
};

const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontSize: 76,
    fontWeight: '200',
  },
});
