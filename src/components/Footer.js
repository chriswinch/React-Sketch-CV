import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { artboard, fonts } from '../design';
import data from '../data.json';

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
      <Text>{data.name}</Text>
      <Text style={fonts.body}>{data.footer.footer_link_1}</Text>
      <Text style={fonts.body}>{data.footer.footer_link_2}</Text>
      <Text style={fonts.body}>{data.footer.footer_link_3}</Text>
    </View>
    <View style={styles.footerItem}>
      <Text style={fonts.subHeading2}>My CV was built using React.</Text>
      <Text style={fonts.body}>View project files at https://github.com/chriswinch/React-Sketch-CV</Text>
    </View>
  </View>
);

export { Footer };
