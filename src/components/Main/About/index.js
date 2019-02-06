import React from 'react';
import ButtonText from '../../shared/buttons/ButtonText';
import CircleImage from './CircleImage';
import styles from './about.module.scss';

const About = ({ updateBeverage }) => (
  <section className={styles.about} id="about">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">About Me</h2>
    </div>
    <div className={styles.content}>
      <div className={styles.row}>
        <div className={styles.circleImageContainer}>
          <CircleImage />
        </div>
        <div className={styles.text}>
          <h3 className="heading-tertiary u-margin-bottom-small">Web developer</h3>
          <p className="paragraph">
            I build websites using full-stack JavaScript, CSS, and other modern web technologies. Every site I build is
            designed from the ground up to help you achieve your online business goals.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Digital marketer</h3>
          <p className="paragraph">
            I understand how digital marketing and web technology are connected, and I want to help you develop a
            comprehensive web strategy that includes both.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Mentor and educator</h3>
          <p className="paragraph">
            I love working with new people, and I genuinely enjoy teaching individuals and teams how to leverage
            websites to build strong businesses. Let's grab <span className={styles.coffee}>coffee</span>,{' '}
            <span className={styles.tea}>tea</span>, or <span className={styles.beer}>beer</span>, and start the
            conversation.
          </p>

          <div className={styles.btnContainer}>
            <ButtonText link="#contact" onClick={() => updateBeverage('coffee')} primary>
              Mmmm, coffee{' '}
              <span role="img" aria-label="coffee">
                ☕
              </span>
            </ButtonText>
            <ButtonText link="#contact" onClick={() => updateBeverage('tea')} tertiary>
              Mmmm, tea{' '}
              <span role="img" aria-label="tea">
                🍵
              </span>
            </ButtonText>
            <ButtonText link="#contact" onClick={() => updateBeverage('beer')} secondary>
              Mmmm, beer{' '}
              <span role="img" aria-label="beer">
                🍺
              </span>
            </ButtonText>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
