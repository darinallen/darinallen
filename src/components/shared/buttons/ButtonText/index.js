import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styles from './button-text.module.scss';

const ButtonText = ({ children, link = '#', onClick, ...btnStyles }) => {
  let classes = `${styles.btn}`;

  for (let key in btnStyles) {
    classes += ` ${styles[key]}`;
  }
  return (
    <AnchorLink href={link} className={classes} onClick={onClick}>
      {children}
    </AnchorLink>
  );
};

export default ButtonText;
