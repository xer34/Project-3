import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Mainpage from "./components/Mainpage";
import About from "./components/About";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import ProfileSettings from "./components/ProfileSettings";
import Events from "./components/Events";
import Players from "./components/Players";
import Groups from "./components/Groups";
import Meta from "./components/Meta";
import Find from "./components/Find";
import { BrowserRouter as Router, Route } from "react-router-dom";
ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/Login" component={Login} />
      <Route exact path="/Register" component={Register} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Profile" component={Profile} />
      <Route exact path="/ProfileSettings" component={ProfileSettings} />
      <Route exact path="/Events" component={Events} />
      <Route exact path="/Players" component={Players} />
      <Route exact path="/Groups" component={Groups} />
      <Route exact path="/Meta" component={Meta} />
      <Route exact path="/Find" component={Find} />
    </div>
  </Router>,
  document.getElementById("root")
);
