import React from 'react';
import styles from './skills.module.scss';

const Skills = () => (
  <section className={styles.skills} id="skills">
    <div className="u-center-text u-margin-bottom-large">
      <h2 className="heading-secondary">Skills</h2>
    </div>
    <div className={styles.categories}>
      <Category category={styles.technology} title={'Technology'}>
        <Skill>JavaScript</Skill>
        <Skill>React</Skill>
        <Skill>Node.js</Skill>
        <Skill>CSS</Skill>
        <Skill>MySQL</Skill>
        <Skill>MongoDB</Skill>
        <Skill>CSS</Skill>
        <Skill>GraphQL</Skill>
        <Skill>Python</Skill>
      </Category>
      <Category category={styles.marketing} title={'Business'}>
        <Skill>Marketing Strategy</Skill>
        <Skill>Python</Skill>
        <Skill>MySQL</Skill>
        <Skill>Sequelize</Skill>
        <Skill>MongoDB</Skill>
        <Skill>Mongoose</Skill>
        <Skill>GraphQL</Skill>
      </Category>
      <Category category={styles.personal} title={'Personal'}>
        <Skill>Guitar</Skill>
        <Skill>Acting</Skill>
        <Skill>Mario Kart</Skill>
      </Category>
    </div>
  </section>
);

export default Skills;

const Category = ({ category, title, children }) => (
  <div className={`${styles.category} ${category}`}>
    <h3>{title}</h3>
    <ul className={styles.list}>{children}</ul>
  </div>
);

const Skill = ({ children }) => <li className={styles.skill}>{children}</li>;
