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
          <title>Darin Allen: Web Development Consulting</title>
          <meta
            name="description"
            content="Darin Allen is a software developer in the Baltimore/DC metro area, building amazing websites for small businesses and corporate clients."
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@darinallen" />
          <meta name="twitter:title" content="Darin Allen: Website Development Consulting" />
          <meta
            name="twitter:description"
            content="Darin Allen is a software developer in the Baltimore/DC metro area, building amazing websites for small businesses and corporate clients."
          />
          <meta name="twitter:creator" content="@darinallen" />

          <meta name="twitter:image" content="https://i.ibb.co/hKyr3wD/website.png" />

          <meta property="og:title" content="Darin Allen: Web Development Consulting" />
          <meta property="og:type" content="article" />
          <meta property="og:url" content="https://www.darinallen.io" />
          <meta property="og:image" content="https://i.ibb.co/hKyr3wD/website.png" />
          <meta
            property="og:description"
            content="Darin Allen is a software developer in the Baltimore/DC metro area, building amazing websites for small businesses and corporate clients."
          />
          <meta property="og:site_name" content="darinallen.io" />
          <meta property="fb:admins" content="Facebook numeric ID" />
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
