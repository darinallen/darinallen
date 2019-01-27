import React from 'react';
import ButtonRound from '../../../shared/buttons/ButtonRound';
import styles from './card.module.scss';

const Card = ({ colorClass, heading, list }) => (
  <div className={`${styles.card} ${styles[`${colorClass}Card`]}`}>
    <div className={`${styles.side} ${styles.front} ${styles[`${colorClass}Border`]}`}>
      <div className={`${styles.picture} ${styles[colorClass]}`}>&nbsp;</div>
      <h4 className={styles.heading}>
        <span className={`${styles.headingSpan} ${styles[`${colorClass}Opaque`]}`}>{heading}</span>
      </h4>
      <ul className={styles.list}>
        {list.map((item, index) => (
          <li className={styles.item} key={index}>
            {item}
          </li>
        ))}
      </ul>
    </div>
    <div className={`${styles.side} ${styles.back} ${styles[`${colorClass}Back`]} ${styles[`${colorClass}Border`]}`}>
      <h4>Examples</h4>
      <p>That one time I was awesome</p>
    </div>
  </div>
);

export default Card;
