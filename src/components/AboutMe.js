import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { fonts } from '../design';

const styles = StyleSheet.create({
  wrapper: {
    width: 400,
  },
});

const AboutMe = () => (
  <View name="About Me" style={styles.wrapper}>
    <Text style={fonts.body}>Enthusiastic and self motivated Frontend Developer with over 10 years experience in building websites for a wide variety of clients. Freelancing has allowed me to work in multiple environments with different teams which has let me gain a flexible approach to development. I can easily be dropped into a team and hit the ground running. I enjoy solving problems and learning new technologies.</Text>
  </View>
);

export { AboutMe };
