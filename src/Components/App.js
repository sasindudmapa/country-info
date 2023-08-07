import "./App.css";
import Home from "./HomePage/Home";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from "./DetailsPage/Details";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:countryId">
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
