import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { artboard, fonts } from '../design';

const styles = StyleSheet.create({
  wrapper: {
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    marginTop: 20,
    paddingTop: 15,
    marginHorizontal: 35,
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  footerItem: {
    marginRight: 40,
    // width: (artboard.width / 2) - 70,
  }
});

const Footer = () => (
  <View style={styles.wrapper}>
    <View style={styles.footerItem}>
      <Text>Chris Winch</Text>
      <Text style={fonts.body}>chriswinch.me</Text>
      <Text style={fonts.body}>github.com/chriswinch</Text>
      <Text style={fonts.body}>codepen.io/chriswinch</Text>
    </View>
    <View style={[styles.footerItem, { }]}>
      <Text style={[fonts.subHeading2, {  }]}>My CV was built using React.</Text>
      <Text style={[fonts.body, {  }]}>View project files at https://github.com/chriswinch/React-Sketch-CV</Text>
    </View>
  </View>
);

export { Footer };
