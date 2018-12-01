import React from 'react';

import styles from './navigation.module.scss';

const Navigation = () => (
  <div className={styles.navigation}>
    <input type="checkbox" className={styles.checkbox} id="nav-toggle" />
    <label htmlFor="nav-toggle" className={styles.button}>
      <span className={styles.icon}>&nbsp;</span>
    </label>
    <div className={styles.background}>&nbsp;</div>
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <a href="#about" className={styles.link}>
            <span className={styles.linkNum}>01</span>About Darin
          </a>
        </li>
        <li className={styles.item}>
          <a href="#features" className={styles.link}>
            <span className={styles.linkNum}>02</span>Web development
          </a>
        </li>
        <li className={styles.item}>
          <a href="#services" className={styles.link}>
            <span className={styles.linkNum}>03</span>Consulting services
          </a>
        </li>
        <li className={styles.item}>
          <a href="#stories" className={styles.link}>
            <span className={styles.linkNum}>04</span>Stories
          </a>
        </li>
        <li className={styles.item}>
          <a href="#quote" className={styles.link}>
            <span className={styles.linkNum}>05</span>Get a quote
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navigation;
