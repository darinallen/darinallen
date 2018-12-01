import React from 'react';
import styles from './story.module.scss';

const Story = ({ heading, image, altText, caption, content }) => (
  <div className={styles.story}>
    <figure className={styles.shape}>
      <img className={styles.img} src={image} alt={altText} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
    <div className={styles.text}>
      <h3 className="heading-tertiary u-margin-bottom-small">{heading}</h3>
      <p>{content}</p>
    </div>
  </div>
);

export default Story;
