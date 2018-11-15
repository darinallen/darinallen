import React from 'react';
import ButtonRound from '../shared/buttons/ButtonRound';
import styles from './header.module.scss';
import guitarIcon from './guitar.png';

export default props => (
  <header className={styles.header}>
    <div className={styles.logoBox}>
      <img className={styles.logo} src={guitarIcon} alt="logo" />
      <p className={styles.title}>Acousticode</p>
    </div>

    <div className={styles.textBox}>
      <h1 className="heading-primary">
        <span className="heading-primary-main">Websites</span>
        <span className="heading-primary-sub">to ignite your business</span>
      </h1>

      <ButtonRound text="Let's build something" white animated />
    </div>
  </header>
);
