import React from 'react';
import Card from './Card';
import styles from './technologies.module.scss';

const devList = ['JavaScript', 'React', 'Node.js', 'MySQL', 'GraphQL'];
const designList = [
  'Adobe Creative Suite',
  'Responsive Design',
  'Modern CSS & Sass',
  'Animation Effects',
  'Data Visualizations'
];
const strategyList = ['SEO', 'Social Media Marketing', 'Content Marketing', 'Digital Advertising', 'Ecommerce'];

const Technologies = () => (
  <section className={styles.services} id="services">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Skills</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <Card colorClass="dev" heading="Web Development" list={devList} />
      </div>
      <div className="col-1-of-3">
        <Card colorClass="design" heading="Web Design" list={designList} />
      </div>
      <div className="col-1-of-3">
        <Card colorClass="strategy" heading="Web Strategy" list={strategyList} />
      </div>
    </div>
  </section>
);

export default Technologies;
