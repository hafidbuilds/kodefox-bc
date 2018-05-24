// @flow
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  Button,
} from 'react-native';

import type {Route} from '../types/Routes';

type Props = {
  navigateTo: (newRoute: Route) => void;
  goBack: () => void;
};
type State = {query: string; images: Array<string>};

export class Search extends Component<Props, State> {
  state = {
    query: 'panda',
    images: [],
  };

  async _fetchStuff() {
    let url = `https://api.imgur.com/3/gallery/search/?q=${this.state.query}`;
    console.log(url);
    let res = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Client-ID 24b9bf1b56a95f7',
      },
    });
    let data = await res.json();
    let images = [];
    for (let item of data.data) {
      if (item.is_album === false) {
        images.push(item.link);
      }
    }
    this.setState({images});
  }

  render() {
    let onChange = (text) => {
      this.setState({query: text});
    };
    let onPress = () => {
      this._fetchStuff();
    };
    let {goBack, navigateTo} = this.props;
    let {query, images} = this.state;
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} value={query} onChangeText={onChange} />
        <Text style={styles.introText}>
          {query || 'Please input some text.'}
        </Text>
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={{borderWidth: 1}}>
            <Text>Search</Text>
          </View>
        </TouchableWithoutFeedback>
        <Button onPress={() => goBack()} title="Go Back" />
        <Button onPress={() => navigateTo('FAVORITES')} title="Go to Favs" />
        <ScrollView style={{borderWidth: 1}}>
          {images.map((uri, i) => {
            return (
              <View key={i} style={styles.imageContainer}>
                <Image source={{uri}} style={styles.image} />
                <View style={styles.favorite} />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 32,
    borderWidth: 1,
    borderColor: '#333',
    paddingHorizontal: 4,
    alignSelf: 'stretch',
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  introText: {
    color: 'red',
  },
  imageContainer: {
    width: 150,
    height: 150,
  },
  image: {
    width: 150,
    height: 150,
  },
  favorite: {
    width: 6,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    right: 8,
    backgroundColor: 'blue',
  },
});
