import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { fonts } from '../design';

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 25,
    paddingHorizontal: 35,
  },
  sectionHeading: {
    marginBottom: 15,
  }
});

const Section = ({ title, children }) => (
  <View name={`Section ${title || ''}`} style={styles.wrapper}>
    {title && <Text name="Section Heading" style={[fonts.h4, styles.sectionHeading]}>{title}</Text>}
    <View name="Section Content">
      { children }
    </View>
  </View>
);

export { Section };
