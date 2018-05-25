// @flow
/* eslint-disable */
import React, {Component} from 'react';
import {View, BackHandler, Text, StyleSheet, Platform} from 'react-native';

import {Home, Favorites, Search} from './Scene';

import type {Route} from './types/Routes';

type Props = {};
type State = {
  currentRoute: Route,
};

let AllRoutes = {
  HOME: Home,
  SEARCH: Search,
  FAVORITES: Favorites,
};

export default class App extends Component<Props, State> {
  state = {
    currentRoute: 'HOME',
  };
  _history = [];

  _navigateTo = (route: Route) => {
    this._history.push(this.state.currentRoute);
    this.setState(({currentRoute}) => ({currentRoute: route}));
  };

  _goBack = () => {
    const lastRoute = this._history.pop();
    if (route) {
      this.setState(({currentRoute}) => ({currentRoute: lastRoute}));
    }
  };

  _onBackPress = () => {
    this._goBack();
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this._onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this._onBackPress);
  }

  render() {
    const Component = AllRoutes[this.state.currentRoute];
    console.log(Component);
    if (Component) {
      return <Component goBack={this._goBack} navigateTo={this._navigateTo} />;
    } else {
      return (
        <View style={styles.container}>
          <Text>Page Not Found</Text>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: {paddingTop: 20},
    }),
    ...Platform.select({
      android: {paddingTop: 30},
    }),
  },
});
