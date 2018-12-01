import React from 'react';
import Card from '../../shared/Card';
import ButtonRound from '../../shared/buttons/ButtonRound';
import styles from './services.module.scss';

const foundational = [
  'WordPress design theme',
  'Easy-to-use CMS',
  'Responsive layout',
  'Search Engine Optimization',
  'Cross-browser support'
];

const advanced = [
  'Foundational Tier plus...',
  'Google Analytics setup',
  'Web marketing strategy',
  'Social marketing plan',
  'Performance Reporting'
];

const premium = [
  'Advanced Tier plus...',
  'Fully custom designs',
  'Custom feature development',
  'Copywriting review',
  'Digital ad strategy'
];

const Services = () => (
  <section className={styles.services} id="services">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Consulting Services</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <Card
          colorClass="secondary"
          imageClass="dev"
          heading="Foundational Services"
          list={foundational}
          ctaLabel={'Starting at'}
          ctaDescription={'$2,999'}
          btnText={'Get a quote!'}
        />
      </div>
      <div className="col-1-of-3">
        <Card
          colorClass="primary"
          imageClass="design"
          heading="Advanced Services"
          list={advanced}
          ctaLabel={'Starting at'}
          ctaDescription={'$4,999'}
          btnText={'Get a quote!'}
        />
      </div>
      <div className="col-1-of-3">
        <Card
          colorClass="tertiary"
          imageClass="social"
          heading="Premium Services"
          list={premium}
          ctaLabel={'Starting at'}
          ctaDescription={'$9,999'}
          btnText={'Get a quote!'}
        />
      </div>
    </div>
    <div className={`u-margin-top-huge ${styles.btnContainer}`}>
      <ButtonRound link="#features" text="Learn More" blue animated />
    </div>
  </section>
);

export default Services;
