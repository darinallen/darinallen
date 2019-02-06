import React from 'react';
import Card from './Card';
import styles from './skills.module.scss';

const devSkills = ['JavaScript', 'React', 'Node.js', 'MySQL', 'GraphQL'];
const designSkills = ['Responsive Design', 'Modern CSS', 'Animation Effects', 'Data Visualizations', 'Sketch'];
const strategySkills = ['SEO', 'Social Marketing', 'Content Marketing', 'Digital Advertising', 'Ecommerce'];

const Skills = () => (
  <section className={styles.services} id="skills">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Skills</h2>
    </div>
    <div className="row">
      <div className="col-1-of-3">
        <Card colorClass="dev" category="Web Development" skills={devSkills} />
      </div>
      <div className="col-1-of-3">
        <Card colorClass="design" category="Web Design" skills={designSkills} />
      </div>
      <div className="col-1-of-3">
        <Card colorClass="strategy" category="Web Strategy" skills={strategySkills} />
      </div>
    </div>
  </section>
);

export default Skills;
