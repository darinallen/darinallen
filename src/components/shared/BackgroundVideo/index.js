import React from 'react';
import styles from './background-video.module.scss';

const BackgroundVideo = ({ source }) => (
  <div className={styles.backgroundVideo}>
    <video className={styles.content} autoPlay muted loop>
      <source src={source} type="video/mp4" />
      Your browser is not supported!
    </video>
  </div>
);

export default BackgroundVideo;
