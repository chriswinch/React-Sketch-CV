import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { ExperienceItem } from './ExperienceItem';

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  }
});

const data = {
  title: "Title",
  date: 'May 2016 - Oct 2016',
  content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, reiciendis, non. Impedit est quas laudantium accusantium aliquid nisi, cum, quam pariatur commodi officia corrupti. Itaque repellat magnam voluptatibus officia minima.',
}

const Experience = () => (
  <View name="Experience" style={styles.wrapper}>
    <ExperienceItem data={data} />
    <ExperienceItem data={data} />
    <ExperienceItem data={data} />
    <ExperienceItem data={data} />
  </View>
);

export { Experience };
