import React from 'react';
import * as emailjs from 'emailjs-com';

import emailjsId from './emailjs-id';
import ButtonRound from '../../shared/buttons/ButtonRound';

import styles from './contact.module.scss';

class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    concept: '',
    submitted: false
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  sendEmail = () => {
    const { name, email, concept } = this.state;
    const { beverage } = this.props;
    let contactNumber = ((Math.random() * 100000) | 0).toString();

    const templateParams = {
      name,
      email,
      concept,
      contactNumber,
      beverage
    };

    const serviceId = 'default_service';
    const templateId = 'contact_form';
    // emailjs.send(serviceId, templateId, templateParams, emailjsId.USER_ID);
    console.log(templateParams);
  };

  handleSubmit = e => {
    const { submitted } = this.state;
    e.preventDefault();

    if (!submitted) {
      this.sendEmail();
      this.setState({ submitted: true });
    }
  };

  render() {
    const { beverage, updateBeverage } = this.props;
    const { name, email, concept, submitted } = this.state;
    return (
      <section className={styles.contact} id="contact">
        <div className="row">
          <div className={`${styles.contactInner} ${styles[beverage]}`}>
            <div className={styles.formContainer}>
              <form id="contact_form" action="#" className={styles.form} onSubmit={this.handleSubmit}>
                <div className="u-margin-bottom-medium">
                  <h2 className={styles.heading}>{`Discuss a project over ${beverage}`}</h2>
                </div>
                <div className={styles.group}>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="Full name"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="name" className={styles.label}>
                    Full name
                  </label>
                </div>
                <div className={styles.group}>
                  <input
                    type="email"
                    className={styles.input}
                    placeholder="Email address"
                    name="email"
                    id="email"
                    value={email}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="email" className={styles.label}>
                    Email address
                  </label>
                </div>
                <div className={styles.group}>
                  <textarea
                    type="textarea"
                    className={`${styles.textArea} ${styles.input}`}
                    placeholder="Project concept"
                    name="concept"
                    id="concept"
                    value={concept}
                    onChange={this.handleChange}
                    required
                  />
                  <label htmlFor="concept" className={styles.label}>
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
                <ButtonRound el="button" type="submit" primary={!submitted} tertiary={submitted} animated>
                  <span>{`Submit${submitted ? 'ted' : ''}`}</span>
                  {submitted && <span className={styles.checkmark}>✔</span>}
                </ButtonRound>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Contact;
