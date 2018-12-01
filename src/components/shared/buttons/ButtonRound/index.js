import React from 'react';
import styles from './button-round.module.scss';

const ButtonRound = ({ el, text, link = '#', ...btnStyles }) => {
  let classes = `${styles.btn}`;

  for (let key in btnStyles) {
    classes += ` ${styles[key]}`;
  }

  return el === 'button' ? (
    <button href={link} className={classes}>
      {text}
    </button>
  ) : (
    <a href={link} className={classes}>
      {text}
    </a>
  );
};

export default ButtonRound;
