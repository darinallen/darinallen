import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Logo from '../shared/Logo';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logoBox}>
      <Logo />
    </div>
    <div className={styles.row}>
      <div className={styles.column}>
        <div className={styles.navigation}>
          <ul className={styles.list}>
            <li className={styles.item}>
              <a href="https://github.com/darinallen" target="_blank" className={styles.link}>
                GitHub
              </a>
            </li>
            <li className={styles.item}>
              <a href="https://twitter.com/darinallen" target="_blank" className={styles.link}>
                Twitter
              </a>
            </li>
            <li className={styles.item}>
              <a href="http://linkedin.com/in/darinallen" target="_blank" className={styles.link}>
                LinkedIn
              </a>
            </li>
            <li className={styles.item}>
              <a href="https://medium.com/@darinallen" target="_blank" className={styles.link}>
                Blog
              </a>
            </li>
            <li className={styles.item}>
              <AnchorLink href="#contact" className={styles.link}>
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.column}>
        <p className={styles.copyright}>
          Built by{' '}
          <a href="https://twitter.com/darinallen" target="_blank" className={styles.link}>
            Darin Allen
          </a>{' '}
          at Acousticode LLC Copyright &copy; by Darin Allen.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
