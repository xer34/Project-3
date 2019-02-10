import React, { Component } from "react";
import "./index.css";

//Our higher order component
import withAuth from "../withAuth";
class Players extends Component {
  render() {
    // console.log("This is the props object in the player card: ", this.props)
    return (
      <div className="cnt-block equal-hight" style={{ height: "350px" }}>
        <figure>
          <img
            src={`${this.props.src}`}
            className="img-responsive"
            alt={this.props.key}
          />
        </figure>
        <h3>
          <a href="/PlayerProfile">{this.props.username}</a>
        </h3>
        <p>{this.props.location}</p>
      </div>
    );
  }
}

export default withAuth(Players);
