import React from 'react';
import imac from './imac.png';
import ipad from './ipad.png';
import iphone from './iphone.png';
import styles from './composition.module.scss';

const Composition = () => (
  <div className={styles.composition}>
    <img src={imac} alt="iMac" className={`${styles.photo} ${styles.photo1}`} />
    <img src={ipad} alt="iPad" className={`${styles.photo} ${styles.photo2}`} />
    <img src={iphone} alt="iPhone" className={`${styles.photo} ${styles.photo3}`} />
  </div>
);

export default Composition;
