import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {Timer, RoundButton, LapsTable, ButtonRow} from './components';

export default class App extends Component {
  state = {
    start: 0,
    now: 0,
    laps: [],
    lapsInterval: [],
  };

  // _tick = () => {
  //   setInterval(() => {
  //     const updating = Date.now();
  //     this.setState({now: updating});
  //   }, 99);
  // };

  componentWillUnmount() {
    clearInterval(this._tick);
  }

  _handleStart = () => {
    const currentTimeClicked = Date.now();
    this.setState(({start, now, laps}) => ({
      start: currentTimeClicked,
      now: currentTimeClicked,
      laps: [0],
      lapsInterval: [0],
    }));
    this._tick = setInterval(() => {
      const updating = Date.now();
      this.setState({now: updating});
    }, 99);
  };

  _handleLap = () => {
    const {now, start, laps, lapsInterval} = this.state;
    let [firstLap, ...otherlaps] = laps;
    const newLap = now - start;
    const newLapInterval = newLap - laps[laps.length - 1];
    this.setState({
      laps: [0, ...otherlaps, newLap],
      lapsInterval: [...lapsInterval, newLapInterval],
    });
  };

  _handleStop = () => {
    clearTimeout(this._tick);
    this.setState(({start, now}) => ({
      start: 0,
      now: 0,
    }));
  };

  _handleReset = () => {
    this.setState(({start, stop, laps, lapsInterval}) => ({
      start: 0,
      stop: 0,
      laps: [],
      lapsInterval: [],
    }));
  };

  render() {
    const {start, now, laps, lapsInterval} = this.state;
    const timeElapsed = now - start;

    return (
      <View style={styles.container}>
        <Timer timeElapsed={timeElapsed} />
        {start === 0 ? (
          <ButtonRow>
            <RoundButton
              title="Reset"
              color="#8B8B90"
              background="#151515"
              onPress={this._handleReset}
            />
            <RoundButton
              title="Start"
              color="#50D167"
              background="#1B361F"
              onPress={this._handleStart}
            />
          </ButtonRow>
        ) : (
          <ButtonRow>
            <RoundButton
              title="Lap"
              color="#8B8B90"
              background="#151515"
              onPress={this._handleLap}
            />
            <RoundButton
              title="Stop"
              color="#E33935"
              background="#3C1715"
              onPress={this._handleStop}
            />
          </ButtonRow>
        )}
        <LapsTable
          laps={laps}
          timeElapsed={timeElapsed}
          lapsInterval={lapsInterval}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
});
