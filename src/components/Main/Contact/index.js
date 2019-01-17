import React from 'react';

import ButtonRound from '../../shared/buttons/ButtonRound';

import styles from './contact.module.scss';

const Contact = ({ beverage }) => (
  <section className={styles.contact} id="contact">
    <div className="row">
      <div className={styles.contactInner}>
        <div className={styles.formContainer}>
          <form action="#" className={styles.form}>
            <div className="u-margin-bottom-medium">
              <h2 className="heading-secondary">{`Meet for ${beverage}`}</h2>
            </div>
            <div className={styles.group}>
              <input type="text" className={styles.input} placeholder="Full name" id="name" required />
              <label htmlFor="name" className={styles.label}>
                Full name
              </label>
            </div>
            <div className={styles.group}>
              <input type="email" className={styles.input} placeholder="Email address" id="email" required />
              <label htmlFor="email" className={styles.label}>
                Email address
              </label>
            </div>
            <div className={`${styles.group} u-margin-bottom-medium`}>
              <div className={styles.radioGroup}>
                <input type="radio" className={styles.radioInput} id="small" name="size" />
                <label htmlFor="small" className={styles.radioLabel}>
                  <span className={styles.radioButton} />
                  New Website
                </label>
              </div>
              <div className={styles.radioGroup}>
                <input type="radio" className={styles.radioInput} id="large" name="size" />
                <label htmlFor="large" className={styles.radioLabel}>
                  <span className={styles.radioButton} />
                  Existing Website
                </label>
              </div>
            </div>
            <div className={styles.group}>
              <ButtonRound el="button" primary animated>
                Next step &rarr;
              </ButtonRound>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;