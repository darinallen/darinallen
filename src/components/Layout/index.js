import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
