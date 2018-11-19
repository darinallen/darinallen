import React from 'react';
import About from './About';
import Features from './Features';
import Services from './Services';
import styles from './main.module.scss';

const Main = () => (
  <main className={styles.main}>
    <About />
    <Features />
    <Services />
  </main>
);

export default Main;
