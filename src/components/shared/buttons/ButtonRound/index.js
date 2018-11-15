import React from 'react';
import styles from './button-round.module.scss';

const ButtonRound = ({ text, ...btnStyles }) => {
  let classes = `${styles.btn}`;

  for (let key in btnStyles) {
    classes += ` ${styles[key]}`;
  }

  return (
    <a href="#" className={classes}>
      {text}
    </a>
  );
};

export default ButtonRound;
