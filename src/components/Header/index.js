import React from 'react';
import ButtonRound from '../shared/buttons/ButtonRound';
import styles from './header.module.scss';
import guitar from '../shared/images/guitar.png';

export default props => (
  <header className={styles.header}>
    <div className={styles.logoBox}>
      <img className={styles.logo} src={guitar} alt="logo" />
      <p className={styles.title}>Acousticode</p>
    </div>

    <div className={styles.logoBox}>
      <img className={styles.logo} src={guitar} alt="logo" />
      <p className={styles.title}>Acousticode</p>
    </div>

    <div className={styles.textBox}>
      <h1 className="heading-primary">
        <span className="heading-primary-main">Darin Allen</span>
        <span className="heading-primary-sub">Full-stack Web Developer</span>
      </h1>

      <ButtonRound link="#quote" white animated>
        Let's build something cool
      </ButtonRound>
    </div>
  </header>
);
