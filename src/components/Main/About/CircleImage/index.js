import React from 'react';
import image from './profile.jpg';
import styles from './circleImage.module.scss';

const CircleImage = () => (
  <figure className={styles.shape}>
    <img className={styles.img} src={image} alt="Darin" />
    <figcaption>
      <a className={styles.caption} href="https://twitter.com/darinallen" target="_blank">
        @darinallen
      </a>
    </figcaption>
  </figure>
);

export default CircleImage;
