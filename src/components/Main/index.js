import React from 'react';
import About from './About';
import Features from './Features';
import Skills from './Skills';
import Technologies from './Technologies';
import Services from './Services';
import Stories from './Stories';
import Contact from './Contact';
import styles from './main.module.scss';

const Main = ({ beverage, updateBeverage }) => (
  <main className={styles.main}>
    <About updateBeverage={updateBeverage} />
    <Features />
    {/* <Skills /> */}
    <Technologies />
    {/* <Services /> */}
    {/* <Stories /> */}
    <Contact beverage={beverage} updateBeverage={updateBeverage} />
  </main>
);

export default Main;
