import React, { Component } from "react";
import { StyleSheet, View, Platform } from "react-native";

const data = [
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " }
];

const Header = props => <View style={styles.header}>{props.children}</View>;

const Content = props => <View style={styles.content}>{props.children}</View>;

const Footer = props => <View style={styles.footer}>{props.children}</View>;

const FriendList = props => (
  <View style={styles.friendlist}>{props.children}</View>
);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header>
          <View style={{ backgroundColor: "#e2e8b2", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#e2e8b2", width: 50, height: 50 }} />
          <View style={{ backgroundColor: "#e2e8b2", width: 50, height: 50 }} />
        </Header>
        <Content>
          <FriendList />
        </Content>
        <Footer>
          <View style={{ flex: 1, backgroundColor: "#e2e8b2", width: 50, height: '100%', borderColor: 'black', borderWidth: 1 }} />
          <View style={{ flex: 1, backgroundColor: "#e2e8b2", width: 50, height: '100%', borderColor: 'black', borderWidth: 1 }} />
          <View style={{ flex: 1, backgroundColor: "#e2e8b2", width: 50, height: '100%', borderColor: 'black', borderWidth: 1 }} />
          <View style={{ flex: 1, backgroundColor: "#e2e8b2", width: 50, height: '100%', borderColor: 'black', borderWidth: 1 }} />
        </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fffdf4",
    ...Platform.select({
      ios: {paddingTop: 30},
      android: {paddingTop: 20}
    })
  },
  header: {
    width: '100%',
    height: 70,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: (70 - 50) / 2,
    justifyContent: "space-between",
    backgroundColor: "#e0ffdd"
  },
  content: {
    flex: 7,
    backgroundColor: "#fdffe5"
  },
  friendlist: {},
  footer: {
    width: '100%',
    height: 70,
    backgroundColor: "#e0ffdd",
    flexDirection: "row",
  }
});
