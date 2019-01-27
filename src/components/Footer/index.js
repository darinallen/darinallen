import React from 'react';
import guitar from '../shared/images/guitar.png';

import styles from './footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.logoBox}>
      <img src={guitar} alt="Full logo" className={styles.logo} />
    </div>
    <div className="row">
      <div className="col-1-of-2">
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
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-1-of-2">
        <p className={styles.copyright}>
          Built by{' '}
          <a href="#" className={styles.link}>
            Darin Allen
          </a>{' '}
          at{' '}
          <a href="#" className={styles.link}>
            Acousticode LLC
          </a>{' '}
          Copyright &copy; by Darin Allen.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
