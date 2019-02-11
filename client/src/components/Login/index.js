import React, { Component } from "react";
// import GoogleLogin from "react-google-login";
import Nav from "../Navbar";
// import API from "../../utils/API";
import AuthHelperMethods from "../AuthHelperMethods";
import "./index.css";
class Login extends Component {
  /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
  Auth = new AuthHelperMethods();
  state = {
    username: "",
    password: ""
  };
  /* Fired off every time the use enters something into the input fields */
  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        if (!res) {
          return alert("Sorry those credentials don't exist!");
        }
        this.props.history.replace("/Profile");
      })
      .catch(err => {
        alert(err);
      });
  };
  componentWillMount() {
    /* Here is a great place to redirect someone who is already logged in to the protected route */
    if (this.Auth.loggedIn()) this.props.history.replace("/Profile");
  }
  render() {
    return (
      <React.Fragment>
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
                LOGIN
              </button>
            </form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Login;
