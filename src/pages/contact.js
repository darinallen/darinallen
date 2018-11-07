import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>Get a quote</p>
  </Layout>
);
