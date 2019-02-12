import React, { Component } from "react";
import AuthHelperMethods from "../AuthHelperMethods";
import Nav from "../Navbar";
import axios from "axios";
import { Link } from "react-router-dom";
import "./index.css";
export default class Register extends Component {
  Auth = new AuthHelperMethods();
  state = {
    username: "",
    password: ""
  };
  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };
  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("/Register", {
        username: this.state.username,
        password: this.state.password
      })
      .then(data => {
        console.log(data);
        this.props.history.replace("/Login");
      });
  };
  componentDidMount() {
    console.log(this.Auth.loggedIn());
    if (this.Auth.loggedIn()) {
      this.props.history.push("/Profile");
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="bg">
          <img src="/images/loginBackground.jpg" alt="bg" className="bg" />
          <Nav />
          <div className="main-wrapper-login">
            <div className="box">
              <div className="box-header" />
              <form className="box-form">
                <input
                  className="form-item"
                  placeholder="Username"
                  name="username"
                  type="text"
                  onChange={this._handleChange}
                />
                <input
                  className="form-item"
                  placeholder="Password"
                  name="password"
                  type="password"
                  onChange={this._handleChange}
                />
                <button className="form-submit" onClick={this.handleFormSubmit}>
                  SIGN UP
                </button>
              </form>
              <br />
              <Link className="link" to="/Login">
                Already have an account?{" "}
                <span className="link-signup">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
