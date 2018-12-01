import React from 'react';
import ButtonRound from '../buttons/ButtonRound';
import styles from './card.module.scss';

const Card = ({ colorClass, imageClass, heading, list, ctaLabel, ctaDescription, btnText }) => (
  <div className={styles.card}>
    <div className={`${styles.side} ${styles.front}`}>
      <div className={`${styles.picture} ${styles[imageClass]}`}>&nbsp;</div>
      <h4 className={styles.heading}>
        <span className={`${styles.headingSpan} ${styles[`${colorClass}Opaque`]}`}>{heading}</span>
      </h4>
      <div className={styles.details}>
        <ul className={styles.list}>
          {list.map((item, index) => (
            <li className={styles.item} key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={`${styles.side} ${styles.back} ${styles[colorClass]}`}>
      <div className={styles.cta}>
        <div className={styles.ctaBox}>
          <p className={styles.ctaLabel}>{ctaLabel}</p>
          <p className={styles.ctaDescription}>{ctaDescription}</p>
        </div>
        <ButtonRound link="#popup" text={btnText} white animated />
      </div>
    </div>
  </div>
);

export default Card;
