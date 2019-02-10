import React, { Component } from "react";
import ProfileNav from "../ProfileNav";
import withAuth from "../withAuth";
import styles from "./index.css";
import axios from "axios";

//
class ProfileSettings extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {};
  }
  //

  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("/ProfileSettings", {
        username: this.state.name,
        location: this.state.zipcode
      })
      .then(data => {
        console.log(data)
      });
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    const divStyle = {
      width: "100%"
    };

    //
    return (
      <div className={styles.background}>
        <ProfileNav />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-md-3 ">
              <div className="list-group ">
                <a
                  href="/"
                  className="list-group-item list-group-item-action active"
                >
                  Dashboard
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <h4>Your Profile</h4>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <form style={divStyle}>
                        <div className="form-group row">
                          <label
                            htmlFor="picture"
                            className="col-12 col-form-label"
                          >
                            Profile Image
                          </label>
                          <div className="col-12">
                            <input
                              id="picture"
                              name="picture"
                              placeholder="Profile Image URL"
                              className="form-control here"
                              type="text"
                              onChange={this._handleChange}
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <div className="offset-4 col-12">
                            <button
                              name="submit"
                              type="submit"
                              className="btn btn-primary"
                              onClick={this.handleFormSubmit}
                            >
                              Update My Profile
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default withAuth(ProfileSettings);
