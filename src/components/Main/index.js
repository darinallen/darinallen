import React from 'react';
import ButtonText from '../shared/buttons/ButtonText';
import styles from './main.module.scss';

const Main = () => (
  <main className={styles.main}>
    <section className={styles.sectionAbout}>
      <div className="u-center-text u-margin-bottom-large">
        <h2 className="heading-secondary">Business-Minded Web Development</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">Make a fantastic first impression</h3>
          <p className="paragraph">
            Your website is the first impression many customers will have of your business. What are you communicating
            about your company when a customer visits your website for the first time? If you aren't sure, or you feel
            like your current website is not maximizing your ability to reach new visitors and convert them into
            customers, I can help.
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">Crush your online business goals</h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio atque repellat dolorum reprehenderit itaque,
            placeat expedita voluptates molestiae.
          </p>

          <ButtonText text="Learn more &rarr;" />
        </div>
        <div className="col-1-of-2">Image Composition</div>
      </div>
    </section>
  </main>
);

export default Main;
