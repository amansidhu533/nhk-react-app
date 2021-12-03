import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Homeone = React.lazy(() => import("./components/pages/Homeone"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Homefour = React.lazy(() => import("./components/pages/Homefour"));
const About = React.lazy(() => import("./components/pages/About"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogtwo = React.lazy(() => import("./components/pages/Blogtwo"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Restaurant = React.lazy(() => import("./components/pages/Restaurant"));
const Restaurantone = React.lazy(() =>
  import("./components/pages/Restaurantone")
);
const Restauranttwo = React.lazy(() =>
  import("./components/pages/Restauranttwo")
);
const Addrestaurant = React.lazy(() =>
  import("./components/pages/Addrestaurant")
);
const Checkout = React.lazy(() => import("./components/pages/Checkout"));
const Exdeals = React.lazy(() => import("./components/pages/Exdeals"));
const Geolocator = React.lazy(() => import("./components/pages/Geolocator"));
const Listview = React.lazy(() => import("./components/pages/Listview"));
const Login = React.lazy(() => import("./components/pages/Login"));
const Register = React.lazy(() => import("./components/pages/Register"));
const Orderdetails = React.lazy(() =>
  import("./components/pages/Orderdetails")
);
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Error = React.lazy(() => import("./components/pages/Error"));

function App() {
  return (
    <Router basename={"/themes/themeforest/react/quickmunch"}>
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home-v1" component={Homeone} />
          <Route exact path="/home-v2" component={Hometwo} />
          <Route exact path="/home-v3" component={Homethree} />
          <Route exact path="/home-v4" component={Homefour} />
          <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog-v2" component={Blogtwo} />
          <Route exact path="/blog-details" component={Blogdetails} />
          <Route exact path="/restaurant" component={Restaurant} />
          <Route exact path="/restaurant-v1" component={Restaurantone} />
          <Route exact path="/restaurant-v2" component={Restauranttwo} />
          <Route exact path="/add-restaurant" component={Addrestaurant} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/ex-deals" component={Exdeals} />
          <Route exact path="/geo-locator" component={Geolocator} />
          <Route exact path="/list-view" component={Listview} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/order-details" component={Orderdetails} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/error-page" component={Error} />
          <Route exact component={Error} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
