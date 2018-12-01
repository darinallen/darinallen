import React from 'react';
import About from './About';
import Features from './Features';
import Services from './Services';
import Stories from './Stories';
import Quote from './Quote';
import styles from './main.module.scss';

const Main = () => (
  <main className={styles.main}>
    <About />
    <Features />
    <Services />
    <Stories />
    <Quote />
  </main>
);

export default Main;
