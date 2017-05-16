import React from 'react';
import { View, Text, StyleSheet } from 'react-sketchapp';
import { artboard, fonts } from '../design';

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
        <Text style={fonts.body}>HTML5 / CSS3 & SASS / JAVASCRIPT / ES6 / REACT / REACT NATIVE / WEBPACK & GULP / MOCHA / JEST / NODE / PHP / WORDPRESS / FOUNDATION & BOOTSTRAP / SHOPIFY / SKETCH / ADOBE CREATIVE SUITE</Text>
      </View>
    </View>
    <View style={styles.contentItem}>
      <Text style={styles.contentItemTitle}>Education:</Text>
      <View style={styles.contentItemText}>
        <Text style={fonts.body}>I am proudly self taught and have felt that due to the fast paced nature of our industry that this has let me learn and adapt quickly. I am constantly learning and try to pick up new technologies / tools as they are needed.</Text>
        <Text style={fonts.body}>lkajslkdjalksjdl</Text>
      </View>
    </View>
    <View style={styles.contentItem}>
      <Text style={styles.contentItemTitle}>Selected project's I have worked on:</Text>
      <View style={styles.contentItemText}>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} courtauld.ac.uk</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} thesixteen.comk</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} hamiltonpark.co.uk</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} dropandrolltour.com</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} uwitechnology.com</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} creditfix.co.uk</Text>
        <Text style={[fonts.body, { flexDirection: 'row' }]}>{'\u2022'} unit23skatepark.co.uk</Text>
      </View>
    </View>
  </View>
);

export { ContentRow };
