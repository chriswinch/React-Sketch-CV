import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { fonts } from '../design';
import data from '../data.json';

const styles = StyleSheet.create({
  headerWrapper: {
    borderBottomWidth: 1,
    borderColor: 'black',
    borderStyle: 'solid',
    paddingVertical: 15,
    marginHorizontal: 25,
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
      <Text style={fonts.h1}>{data.name}</Text>
      <Text style={[fonts.h4, styles.jobTitle]}>{data.job}</Text>
    </View>
    <View name="Contact Details" style={styles.contact}>
      <Text name="Contact Heading" style={fonts.subHeading2}>/ Contact</Text>
      <Text name="Contact Info" style={[fonts.body, styles.contactText]}>
        {data.phone}
        {data.email}
      </Text>
    </View>
    <View name="Contact Address" style={styles.contact}>
      <Text name="Contact Heading" style={fonts.subHeading2}>/ Address</Text>
      <Text name="Address" style={[fonts.body, styles.contactText]}>
        <Text name="Street">{data.address.street}</Text>
        <Text name="City">{data.address.city}</Text>
        <Text name="PostCode">{data.address.postcode}</Text>
      </Text>
    </View>
  </View>
);

export { Header };
