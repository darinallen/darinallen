import React from 'react';
import { Link } from 'gatsby';

import homeIcon from './home-1.svg';
import aboutIcon from './user-4.svg';
import contactIcon from './smartphone-7.svg';

import styles from './navbar.module.scss';

const Navbar = ({ data }) => (
  <ul className={styles.navbar}>
    <li>
      <Link className={styles.link} to="/">
        <img className={styles.icon} src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link className={styles.link} to="/about">
        <img className={styles.icon} src={aboutIcon} alt="About" />
        <span>About</span>
      </Link>
    </li>
    <li>
      <Link className={styles.link} to="/contact">
        <img className={styles.icon} src={contactIcon} alt="Contact" />
        <span>Contact</span>
      </Link>
    </li>
  </ul>
);

export default Navbar;
