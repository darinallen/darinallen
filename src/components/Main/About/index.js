import React from 'react';
import ButtonText from '../../shared/buttons/ButtonText';
import Composition from './Composition';
import styles from './about.module.scss';

const About = () => (
  <section className={styles.about}>
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Business-Minded Web Development</h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <h3 className="heading-tertiary u-margin-bottom-small">Make a killer first impression</h3>
        <p className="paragraph">
          Your website is the first experience many customers will have with your business. It's time to make it a great
          one.
        </p>

        <h3 className="heading-tertiary u-margin-bottom-small">Rock your online business goals</h3>
        <p className="paragraph">
          Is your website a fully-integrated part of your larger business strategy? Complete my free Business Alignment
          Quiz to see if you're hitting the mark.
        </p>

        <ButtonText text="Learn more &rarr;" />
      </div>
      <div className="col-1-of-2">
        <Composition />
      </div>
    </div>
  </section>
);

export default About;
