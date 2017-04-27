import React from "react";
import ReactRouter, {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from "react-router";
import HelloWorld from "../components/helloWorld.jsx";

const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={HelloWorld} />
  </Router>
)

export default routes;
