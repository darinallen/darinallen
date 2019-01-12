import React from 'react';
import styles from './button-round.module.scss';

const ButtonRound = ({ el, link = '#', children, ...btnStyles }) => {
  let classes = `${styles.btn}`;

  for (let key in btnStyles) {
    classes += ` ${styles[key]}`;
  }

  return el === 'button' ? (
    <button href={link} className={classes}>
      {children}
    </button>
  ) : (
    <a href={link} className={classes}>
      {children}
    </a>
  );
};

export default ButtonRound;
