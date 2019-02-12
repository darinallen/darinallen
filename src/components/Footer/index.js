import React from 'react';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
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
              <OutboundLink
                href="https://github.com/darinallen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </OutboundLink>
            </li>
            <li className={styles.item}>
              <OutboundLink
                href="https://twitter.com/darinallen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Twitter
              </OutboundLink>
            </li>
            <li className={styles.item}>
              <OutboundLink
                href="http://linkedin.com/in/darinallen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </OutboundLink>
            </li>
            <li className={styles.item}>
              <OutboundLink
                href="https://medium.com/@darinallen"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                Blog
              </OutboundLink>
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
          {'Built by '}
          <OutboundLink
            href="https://twitter.com/darinallen"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Darin Allen
          </OutboundLink>
          {' at Acousticode LLC Copyright © by Darin Allen.'}
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
