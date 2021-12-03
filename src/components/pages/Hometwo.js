import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footertwo";
import Content from "../sections/hometwo/Content";

class Hometwo extends Component {
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

export default Hometwo;
