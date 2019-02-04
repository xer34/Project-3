import React from "react";
import ReactDOM from 'react-dom';
import Login from "./components/Login";
import Register from "./components/Register";
import Mainpage from "./components/Mainpage";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Profile" component={Profile} />
    </div>
  </Router>,
  document.getElementById("root")
);
