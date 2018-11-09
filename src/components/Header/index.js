import React from 'react';
import styles from './header.module.scss';
import guitarIcon from './guitar.png';

export default props => (
  <header className={styles.header}>
    <div className={styles.logoBox}>
      <img className={styles.logo} src={guitarIcon} alt="logo" />
    </div>
    <h1 className={styles.title}>Acousticode</h1>
  </header>
);
