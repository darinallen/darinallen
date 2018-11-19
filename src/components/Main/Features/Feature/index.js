import React from 'react';
import styles from './feature.module.scss';

const Feature = ({iconClass, heading, text}) => (
  <div className={styles.box}>
    <i className={`${styles.icon} ${iconClass}`} />
    <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
    <p>{text}</p>
  </div>
);

export default Feature;
