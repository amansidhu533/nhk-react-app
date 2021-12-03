import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footertwo";
import Content from "../sections/restaurantone/Content";

class Restaurantone extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>NHK | Restaurant</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Restaurantone;
