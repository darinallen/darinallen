import React from 'react';
import guitar from './guitar.png';
import styles from './logo.module.scss';

const Logo = () => (
  <div>
    <img className={styles.logo} src={guitar} alt="logo" />
    <p className={styles.title}>Acousticode</p>
  </div>
);

export default Logo;
