import React from 'react';
import Header from '../components/Header';
import styles from './index.module.scss';

export default () => (
  <div>
    <Header />
    <main className={styles.content}>
      <p>Website Development Services</p>
    </main>
  </div>
);
