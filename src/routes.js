import React from "react";
import { Route } from "react-router";
import HomePage from "./components/home/HomePage";
import AdminPage from "./components/home/AdminPage";

export default () => (
  <React.Fragment>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/admin" component={AdminPage} />
  </React.Fragment>
);
