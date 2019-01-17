import React from 'react';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

class Home extends React.Component {
  state = {
    beverage: 'Coffee'
  };

  updateBeverage = beverage => {
    this.setState({ beverage });
  };

  render() {
    const { beverage } = this.state;

    return (
      <div>
        <Navigation beverage={beverage} />
        <Header />
        <Main beverage={beverage} updateBeverage={this.updateBeverage} />
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default Home;
