import React from 'react';
import ButtonText from '../../shared/buttons/ButtonText';
import CircleImage from './CircleImage';
import styles from './about.module.scss';

const About = () => (
  <section className={styles.about} id="about">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">About Me</h2>
    </div>
    <div className={styles.row}>
      <div className={styles.circleImageContainer}>
        <CircleImage />
      </div>
      <div className={styles.text}>
        <h3 className="heading-tertiary u-margin-bottom-small">Web developer</h3>
        <p className="paragraph">
          I build websites using full-stack JavaScript, CSS, and other modern web technologies. I specialize in React
          and Node.js.
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">Digital marketer</h3>
        <p className="paragraph">
          I understand how digital marketing and web technology are connected, and I would love to help you develop a
          comprehensive web strategy that includes both aspects to achieve your business goals.
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">Mentor and educator</h3>
        <p className="paragraph">
          I've taught software training seminars across the United States and Canada, and I love helping people and
          teams grow and develop their skills.
        </p>

        <ButtonText link="#features" text="Learn more &rarr;" />
      </div>
    </div>
  </section>
);

export default About;
