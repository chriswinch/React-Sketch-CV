import React from 'react';
import { render, Artboard, View, StyleSheet } from 'react-sketchapp';
import { Header, Section, AboutMe, Experience, ContentRow, Footer } from './components';
import { artboard } from './design';

const styles = StyleSheet.create({
  artboard: {
    height: artboard.height,
    width: artboard.width,
  }
});

const Document = () => (
  <Artboard
    name="Page One"
    style={styles.artboard}
  >
    <Header />

    <Section name="About Me" title="About Me">
      <AboutMe />
    </Section>

    <Section name="Experience" title="Experience">
      <Experience />
    </Section>

    <Section>
      <ContentRow />
    </Section>

    <Footer />
  </Artboard>
);

export default (context) => {
  render(<Document />, context.document.currentPage());
}
