import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { fonts } from '../design';

const styles = StyleSheet.create({
  headerWrapper: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingVertical: 25,
    marginHorizontal: 35,
    flexDirection: 'row',
  },
  headerName: {
    width: 230
  },
  jobTitle: {
  },
  contact: {
    marginTop: 7,
    flex: 1,
  },
  contactText: {
    marginTop: 6
  }
});

const Header = () => (
  <View name="Header" style={styles.headerWrapper}>
    <View name="Name" style={styles.headerName}>
      <Text style={fonts.h1}>Chris Winch</Text>
      <Text style={[fonts.h4, styles.jobTitle]}>Front-End Developer</Text>
    </View>
    <View name="Contact Details" style={styles.contact}>
      <Text name="Contact Heading" style={fonts.subHeading2}>/ Contact</Text>
      <Text name="Contact Info" style={[fonts.body, styles.contactText]}>
        07446055398
        hello@chriswinch.me
      </Text>
    </View>
    <View name="Contact Address" style={styles.contact}>
      <Text name="Contact Heading" style={fonts.subHeading2}>/ Address</Text>
      <Text name="Address" style={[fonts.body, styles.contactText]}>
        <Text name="Street">31 Queen Square</Text>
        <Text name="City">Glasgow</Text>
        <Text name="PostCode">G41 2BD</Text>
      </Text>
    </View>
  </View>
);

export { Header };
