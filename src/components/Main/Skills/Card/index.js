import React from 'react';
import styles from './card.module.scss';

const Card = ({ colorClass, category, skills }) => (
  <div className={`${styles.card} ${styles[`${colorClass}Card`]}`}>
    <div className={`${styles.side} ${styles.front} ${styles[`${colorClass}Border`]}`}>
      <div className={`${styles.picture} ${styles[colorClass]}`}>&nbsp;</div>
      <h4 className={styles.heading}>
        <span className={`${styles.headingSpan} ${styles[`${colorClass}Opaque`]}`}>{category}</span>
      </h4>
      <ul className={styles.skills}>
        {skills.map((skill, index) => (
          <li className={styles.skill} key={index}>
            {skill}
          </li>
        ))}
      </ul>
    </div>
    {/* <div className={`${styles.side} ${styles.back} ${styles[`${colorClass}Back`]} ${styles[`${colorClass}Border`]}`} /> */}
  </div>
);

export default Card;
