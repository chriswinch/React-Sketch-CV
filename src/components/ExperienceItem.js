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

const ExperienceItem = ({ data }) => (
  <View name={`Experience ${data.title}`} style={styles.wrapper}>
    <View style={styles.titleWrapper}>
      <Text style={styles.titleItem}>{data.title}</Text>
      <Text style={[fonts.subHeading3, styles.titleItem, { paddingBottom: 1 }]}>{data.date.toUpperCase()}</Text>
    </View>
    <Text style={[fonts.body]}>
      {data.content}
    </Text>
  </View>
)

export { ExperienceItem };
