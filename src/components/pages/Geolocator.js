import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Content from "../sections/geolocator/Content";

class Geolocator extends Component {
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>NHK | Geolocator</title>
          <meta name="description" content="#" />
        </MetaTags>
        <Content />
      </Fragment>
    );
  }
}

export default Geolocator;
