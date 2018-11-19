import React from 'react';
import Feature from './Feature'
import '../../../styles/icon-font.css';
import styles from './features.module.scss';

const Features = () => (
  <section className={styles.features}>
    <div className="row">
      <div className="col-1-of-4">
        <Feature heading="Beautiful websites" iconClass="icon-basic-webpage-img-txt" text="Effective web designs tailored to your specific business goals." />
      </div>
      <div className="col-1-of-4">
        <Feature heading="Responsive layouts" iconClass="icon-basic-smartphone" text="A first-class visitor experience across every device and modern browser." />
      </div>
      <div className="col-1-of-4">
        <Feature heading="Leading technology" iconClass="icon-basic-bolt" text="Premier tech solutions under the hood, optimized for speed and reliability." />
      </div>
      <div className="col-1-of-4">
        <Feature heading="Crafted with care" iconClass="icon-basic-heart" text="Thoughtful consulting services, where your success is sincerely valued." />
      </div>
    </div>
  </section>
);

export default Features;
