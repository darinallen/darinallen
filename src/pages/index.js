import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import styles from './index.module.scss';

export default () => (
  <Layout>
    <Header headerText="Darin Allen" />
    <main className={styles.content}>
      <p>Website Development Services</p>
    </main>
  </Layout>
);
