import React from 'react';
import About from './About';
import Features from './Features';
import Services from './Services';
import Stories from './Stories';
import Contact from './Contact';
import styles from './main.module.scss';

const Main = ({ beverage, updateBeverage }) => (
  <main className={styles.main}>
    <About updateBeverage={updateBeverage} />
    <Features />
    <Services />
    <Stories />
    <Contact beverage={beverage} />
  </main>
);

export default Main;
