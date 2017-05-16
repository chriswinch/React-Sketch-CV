import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { artboard, fonts } from '../design';

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 15,
    width: (artboard.width / 2) - 50,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 5,
  },
  titleItem: {
    marginRight: 10
  }
});

const ExperienceItem = ({ experience }) => (
  <View name={`Experience ${experience.title}`} style={styles.wrapper}>
    <View style={styles.titleWrapper}>
      <Text style={styles.titleItem}>{experience.title}</Text>
      <Text style={[fonts.subHeading3, styles.titleItem, { paddingBottom: 1 }]}>{experience.date}</Text>
    </View>
    <Text style={[fonts.body]}>
      {experience.content}
    </Text>
  </View>
)

export { ExperienceItem };
