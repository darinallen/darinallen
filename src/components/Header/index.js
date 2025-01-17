import React from 'react';
import Logo from '../shared/Logo';
import styles from './header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className={styles.logoBox}>
      <Logo />
    </div>

    <div className={styles.textBox}>
      <h1 className="heading-primary">
        <span className="heading-primary-main">Darin Allen</span>
        <span className="heading-primary-sub">Full-stack Web Developer</span>
      </h1>
    </div>
  </header>
);

export default Header;
