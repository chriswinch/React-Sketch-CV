import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { artboard, fonts } from '../design';
import data from '../data.json';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -10,
  },
  contentItem: {
    width: ( artboard.width / 3 ) - 40,
  },
  contentItemTitle: {
    marginBottom: 5,
  }
});

const ContentRow = () => (
  <View style={styles.wrapper}>
    <View style={styles.contentItem}>
      <Text style={styles.contentItemTitle}>Skills:</Text>
      <View style={styles.contentItemText}>
        <Text style={fonts.body}>{data.skills}</Text>
      </View>
    </View>
    <View style={styles.contentItem}>
      <Text style={styles.contentItemTitle}>Education:</Text>
      <View style={styles.contentItemText}>
        <Text style={fonts.body}>{data.education}</Text>
      </View>
    </View>
    <View style={styles.contentItem}>
      <Text style={styles.contentItemTitle}>Selected projects I have worked on:</Text>
      <View style={styles.contentItemText}>
        {data.projects.map((project, key) => {
          return <Text key={key} style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} {` ${project.url}`}</Text>
        })}
      </View>
    </View>
  </View>
);

export { ContentRow };
