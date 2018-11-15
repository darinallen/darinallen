import React from 'react';
import styles from './button-text.module.scss';

const ButtonText = ({ text }) => (
  <a href="#" className={styles.btnText}>
    {text}
  </a>
);

export default ButtonText;
