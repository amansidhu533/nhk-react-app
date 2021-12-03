import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footertwo";
import Content from "../sections/addrestaurant/Content";

class Addrestaurant extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>NHK | Add Restaurant</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Addrestaurant;
