import React from 'react';

import ButtonRound from '../../shared/buttons/ButtonRound';

import styles from './contact.module.scss';

const Contact = ({ beverage, updateBeverage }) => (
  <section className={styles.contact} id="contact">
    <div className="row">
      <div className={styles.contactInner}>
        <div className={styles.formContainer}>
          <form action="#" className={styles.form}>
            <div className="u-margin-bottom-medium">
              <h2 className={styles.heading}>{`Discuss a project over ${beverage}`}</h2>
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
            <div className={styles.group}>
              <textarea
                type="textarea"
                className={`${styles.textArea} ${styles.input}`}
                placeholder="Project concept"
                id="concept"
                required
              />
              <label htmlFor="details" className={styles.label}>
                Project concept
              </label>
            </div>
            <div className={`${styles.group} u-margin-bottom-medium`}>
              <div className={styles.radioGroup}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  id="coffee"
                  value="coffee"
                  name="beverage"
                  checked={beverage === 'coffee'}
                  onChange={() => updateBeverage('coffee')}
                />
                <label htmlFor="coffee" className={styles.radioLabel}>
                  <span className={`${styles.radioButton} ${styles.coffeeRadioButton}`} />
                  Coffee
                </label>
              </div>
              <div className={styles.radioGroup}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  id="tea"
                  value="tea"
                  name="beverage"
                  checked={beverage === 'tea'}
                  onChange={() => updateBeverage('tea')}
                />
                <label htmlFor="tea" className={styles.radioLabel}>
                  <span className={`${styles.radioButton} ${styles.teaRadioButton}`} />
                  Tea
                </label>
              </div>
              <div className={styles.radioGroup}>
                <input
                  type="radio"
                  className={styles.radioInput}
                  id="beer"
                  value="beer"
                  name="beverage"
                  checked={beverage === 'beer'}
                  onChange={() => updateBeverage('beer')}
                />
                <label htmlFor="beer" className={styles.radioLabel}>
                  <span className={`${styles.radioButton} ${styles.beerRadioButton}`} />
                  Beer
                </label>
              </div>
            </div>
            <ButtonRound el="button" primary animated>
              Next step &rarr;
            </ButtonRound>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
