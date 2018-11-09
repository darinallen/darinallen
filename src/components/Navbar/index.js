import React from 'react';
import { Link } from 'gatsby';

import homeIcon from './_ionicons_svg_md-home.svg';
import aboutIcon from './_ionicons_svg_md-person.svg';
import contactIcon from './_ionicons_svg_md-mail.svg';

import styles from './navbar.module.scss';

const Navbar = ({ data }) => (
  <ul className={styles.navbar} data-menu-underline-from-center>
    <li className={styles.linkContainer}>
      <Link className={styles.link} to="/">
        <img className={styles.icon} src={homeIcon} alt="Home" />
        <span>Home</span>
      </Link>
    </li>
    <li className={styles.linkContainer}>
      <Link className={styles.link} to="/about">
        <img className={styles.icon} src={aboutIcon} alt="About" />
        <span>About</span>
      </Link>
    </li>
    <li className={styles.linkContainer}>
      <Link className={styles.link} to="/contact">
        <img className={styles.icon} src={contactIcon} alt="Contact" />
        <span>Contact</span>
      </Link>
    </li>
  </ul>
);

export default Navbar;
