import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import Content from "../sections/homeone/Content";

class Homeone extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>NHK | Homepage</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Homeone;
