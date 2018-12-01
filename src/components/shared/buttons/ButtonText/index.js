import React from 'react';
import styles from './button-text.module.scss';

const ButtonText = ({ text, link = '#' }) => (
  <a href={link} className={styles.btnText}>
    {text}
  </a>
);

export default ButtonText;
