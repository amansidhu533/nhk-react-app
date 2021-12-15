import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

// Css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/swiper/swiper-bundle.min.css";
import "../node_modules/magnific-popup/dist/magnific-popup.css";
import "../node_modules/react-rangeslider/lib/index.css";
import "./assets/css/font-awesome.css";
import "./assets/css/font/flaticon.css";
import "./assets/css/style.css";
import "./assets/css/responsive.css";
import "./assets/css/color4.css";
import "./index.css";

ReactDOM.render(
  <BrowserRouter basename={"/nhk-react-app"}>
    <App />
  </BrowserRouter>,
  document.getElementById("quickmunch")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
