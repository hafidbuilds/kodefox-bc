import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const RoundButton = ({title, color, background, onPress, disabled}) => {
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: background}]}
      onPress={() => !disabled && onPress()}
    >
      <View style={styles.buttonBorder}>
        <Text style={[styles.buttonText, {color}]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    height: 74,
    width: 74,
    borderRadius: 37,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
  },
});
