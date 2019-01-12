import React from 'react';
import styles from './button-text.module.scss';

const ButtonText = ({ children, link = '#', ...btnStyles }) => {
  let classes = `${styles.btn}`;

  for (let key in btnStyles) {
    classes += ` ${styles[key]}`;
  }
  return (
    <a href={link} className={classes}>
      {children}
    </a>
  );
};

export default ButtonText;
