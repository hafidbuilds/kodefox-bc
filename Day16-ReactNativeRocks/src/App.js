import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import Header from './components/Header'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>

        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#F5F5F5',
    ...Platform.select({
      ios: {paddingTop: 30}
    })
  },
  content: {
    flex: 1
  },
});
