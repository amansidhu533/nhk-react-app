import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Footer from "../layouts/Footertwo";
import Content from "../sections/blogdetails/Content";

class Blogdetails extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>NHK | Blog Details</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Header />
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Blogdetails;
