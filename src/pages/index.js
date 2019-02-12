import React from 'react';
import { Helmet } from 'react-helmet';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';
// import Popup from '../components/Popup';

class Home extends React.Component {
  state = {
    beverage: 'coffee'
  };

  updateBeverage = beverage => {
    this.setState({ beverage });
  };

  render() {
    const { beverage } = this.state;

    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Darin Allen is a full-stack software developer in the Baltimore/DC metro area, building amazing websites for small businesses and corporate clients."
          />
          <title>Darin Allen: Full-stack Web Developer</title>
        </Helmet>
        <Navigation beverage={beverage} />
        <Header />
        <Main beverage={beverage} updateBeverage={this.updateBeverage} />
        <Footer />
        {/* <Popup /> */}
      </div>
    );
  }
}

export default Home;
