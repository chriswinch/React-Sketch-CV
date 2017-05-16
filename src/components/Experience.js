import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { ExperienceItem } from './ExperienceItem';
import data from '../data-sample.json';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

const Experience = () => (
  <View name="Experience" style={styles.wrapper}>
    {data.experience.map(experience => {
      return <ExperienceItem experience={experience} />
    })}
  </View>
);

export { Experience };
