import React from 'react';
import { Link } from 'gatsby';
import styles from './navbar.module.scss';

const Navbar = () => (
  <ul className={styles.navbar}>
    <li className={styles.item}>
      <Link to="/">Home</Link>
    </li>
    <li className={styles.item}>
      <Link to="/about">About</Link>
    </li>
    <li className={styles.item}>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
);

export default Navbar;
