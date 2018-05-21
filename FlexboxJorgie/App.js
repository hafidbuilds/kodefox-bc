import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.header}>
      {props.children}
    </View>
  )
}

const Content = (props) => {
  return(
    <View style={styles.content}>
      {props.children}
    </View>
  )
}

const Footer = (props) => {
  return(
    <View style={styles.footer}>
      {props.children}
    </View>
  )
}

const FriendList = (props) => {
  return(
    <View>
      {props.children}
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header >
          <View />
          <View />
          <View />
        </Header>
        <Content >
          <FriendList />
        </Content>
        <Footer >
          <View />
          <View />
          <View />
          <View />                              
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fffdf4',
  },
  header: {
    flex: 1,     
    backgroundColor: '#e0ffdd',
  },
  content: {
    flex: 3, 
    backgroundColor: '#fdffe5',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff4d0',
  },
});
