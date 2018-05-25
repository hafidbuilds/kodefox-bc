import React from 'react';
import {Text, StyleSheet} from 'react-native';
import moment from 'moment';

const Timer = ({interval}) => {
  const duration = moment.duration(interval);
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return (
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()},{centiseconds}
    </Text>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timer: {
    color: 'white',
    fontSize: 76,
    fontWeight: '200',
  },
});
