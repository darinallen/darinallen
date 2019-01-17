import React from 'react';
import About from './About';
import Features from './Features';
import Services from './Services';
import Stories from './Stories';
import Contact from './Contact';
import styles from './main.module.scss';

class Main extends React.Component {
  state = {
    beverage: 'Coffee'
  };

  updateBeverage = beverage => {
    this.setState({ beverage });
  };

  render() {
    const { beverage } = this.state;

    return (
      <main className={styles.main}>
        <About updateBeverage={this.updateBeverage} />
        <Features />
        <Services />
        <Stories />
        <Contact beverage={beverage} />
      </main>
    );
  }
}

export default Main;
