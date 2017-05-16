import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { fonts } from '../design';
import data from '../data.json';

const styles = StyleSheet.create({
  wrapper: {
    width: 400,
  },
});

const AboutMe = () => (
  <View name="About Me" style={styles.wrapper}>
    <Text style={fonts.body}>{data.bio}</Text>
  </View>
);

export { AboutMe };
