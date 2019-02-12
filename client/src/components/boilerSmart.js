import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";
import styles from "./index.css";
/* Once the 'Authservice' and 'withAuth' componenets are created, import them into App.js */
import AuthHelperMethods from "../AuthHelperMethods";
//Our higher order component
import withAuth from "../withAuth";
class example extends Component {
  render() {
    return (
      <div>
        <ProfileNav />
      </div>
    );
  }
}
export default example;
