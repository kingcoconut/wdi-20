import React from "react";
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from "react-router";
import Search from "../components/search.jsx";
import Details from "../components/details.jsx";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Search} />
    <Route path="details/:username" component={Details} />
  </Router>
)

export default routes;
