import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  Image,
  ScrollView
} from "react-native";

const data = [
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " },
  { name: "Hafidz Permana", nickname: "hafidzpermana", profilePic: "  " }
];

const Header = props => <View style={styles.header}>{props.children}</View>;

const Content = props => <View style={styles.content}>{props.children}</View>;

const PersonProfile = props => {
  return (
    <View style={styles.personprofile}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{
          uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
        }}
      />
      <Text>Test</Text>
    </View>
  );
};

const Footer = props => <View style={styles.footer}>{props.children}</View>;

const PersonDetails = props => {
  const { name, nickname } = props.details;
  return (
    <View style={styles.persondetails}>
      <Image
        style={{ width: 30, height: 30, borderRadius: 15 }}
        source={{
          uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"
        }}
      />
      <View>
        <Text>Name : {name}</Text>
        <Text>Nickname : {nickname}</Text>
      </View>
      <View style={{}}>
        <Text
          style={{
            height: 30,
            backgroundColor: "#e0ffdd",
            alignSelf: "center"
          }}
        >
          Del Msg
        </Text>
      </View>
    </View>
  );
};

const PersonContacts = props => (
  <View style={styles.personcontacts}>{props.children}</View>
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
          <PersonProfile />
          <PersonContacts>
            <ScrollView>
              {data.map((person, i) => (
                <PersonDetails key={i} details={person} />
              ))}
            </ScrollView>
          </PersonContacts>
        </Content>
        <Footer>
          <View
            style={{
              flex: 1,
              backgroundColor: "#e2e8b2",
              width: 50,
              height: "100%",
              borderColor: "black",
              borderWidth: 1
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#e2e8b2",
              width: 50,
              height: "100%",
              borderColor: "black",
              borderWidth: 1
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#e2e8b2",
              width: 50,
              height: "100%",
              borderColor: "black",
              borderWidth: 1
            }}
          />
          <View
            style={{
              flex: 1,
              backgroundColor: "#e2e8b2",
              width: 50,
              height: "100%",
              borderColor: "black",
              borderWidth: 1
            }}
          />
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
      ios: { paddingTop: 30 },
      android: { paddingTop: 20 }
    })
  },
  header: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    backgroundColor: "#e0ffdd"
  },
  content: {
    flex: 7,
    backgroundColor: "#fdffe5"
  },
  personprofile: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 50
  },
  persondetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 5
  },
  personcontacts: {
    marginHorizontal: 15,
    backgroundColor: "#e0ffdd",
    borderRadius: 5
  },
  footer: {
    width: "100%",
    height: 70,
    backgroundColor: "#e0ffdd",
    flexDirection: "row"
  }
});
