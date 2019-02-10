import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";

//Our higher order component
import withAuth from "../withAuth";

class Meta extends Component {
  render() {
    return (
      <div>
        <ProfileNav />
      </div>
    );
  }
}

export default withAuth(Meta);
