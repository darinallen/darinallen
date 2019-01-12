import React from 'react';
import Card from '../../shared/Card';
import ButtonRound from '../../shared/buttons/ButtonRound';
import styles from './services.module.scss';

const foundational = ['WordPress theme', 'Easy-to-use CMS', 'Responsive layout', 'SEO', 'Cross-browser support'];

const advanced = [
  'Foundational Tier plus...',
  'Google Analytics setup',
  'Web marketing strategy',
  'Social marketing plan',
  'Performance Reporting'
];

const premium = [
  'Advanced Tier plus...',
  'Custom designs',
  'Custom features',
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
          ctaDescription={'$2,999'}
        />
      </div>
      <div className="col-1-of-3">
        <Card
          colorClass="primary"
          imageClass="design"
          heading="Advanced Services"
          list={advanced}
          ctaDescription={'$4,999'}
        />
      </div>
      <div className="col-1-of-3">
        <Card
          colorClass="tertiary"
          imageClass="social"
          heading="Premium Services"
          list={premium}
          ctaDescription={'$9,999'}
        />
      </div>
    </div>
    <div className={`u-margin-top-huge ${styles.btnContainer}`}>
      <ButtonRound link="#features" primary animated>
        Learn more
      </ButtonRound>
    </div>
  </section>
);

export default Services;
