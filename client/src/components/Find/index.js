import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";
import axios from "axios";
import AuthHelperMethods from "../AuthHelperMethods";
import withAuth from "../withAuth";
import style from "./index.css";
//
class Find extends Component {
  state = {
    name: "",
    location: "",
    picture: "",
    matches: []
  };
  //
  Auth = new AuthHelperMethods();
  //
  handleFormSubmit = e => {
    e.preventDefault();
    const apiKey = process.env.REACT_APP_API_KEY;
    const zipCode = document.getElementById("zip").value;
    const distance = document.getElementById("distance").value;
    var queryURL = `https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/${apiKey}/radius.json/${zipCode}/${distance}/mile`;
    //user enters zip and radius
    fetch(queryURL)
      .then(res => res.json())
      .then(res => {
        const zipCodes = res.zip_codes;
        console.log(zipCodes)
        // for each item in the zip code array, search for the db for a match
        Promise.all(
          zipCodes.map(item => {
            // axios post find all to fix this database search, totally ridiculous currently
            // if there is a match, add that match to a new array
            return axios.post("/Find", {
              zip: item.zip_code
            });
          })
        ).then(arrayOfRes => {
          let tempArray = [];
          console.log("array for res", arrayOfRes)
          //map over components matching query
          // eslint-disable-next-line
          arrayOfRes.map(response => {
            tempArray.push(response.data);
            console.log("tempArray", tempArray)
          });
          // display the new array and map that
          this.setState({
            matches: tempArray
          });
          if (this.Auth.loggedIn())
            this.props.history.push({
              pathname: "/Players",
              state: { matches: this.state.matches }
            });
        });
      });
  };
  //
  render() {
    return (
      <div className={style.background}>
      <img src="/images/findBackground.jpg" alt="bg" className="bg" />
        <ProfileNav />
        <div className="main-wrapper-login">
          <div className="box">
            <div className="box-header" />
            <form className="box-form">
              <input
                className="form-item"
                id="zip"
                placeholder="Zip Code"
                name="zipcode"
                type="text"
                pattern="[0-9]{5}"
                title="Five digit zip code"
                maxLength="5"
                onChange={this._handleChange}
              />
              <input
                className="form-item distance"
                placeholder="Distance (in miles)"
                id="distance"
                name="Distance"
                type="text"
                pattern="[0-9]{2}"
                title="Distance in Miles"
                maxLength="3"
                onChange={this._handleChange}
              />
              <button className="form-submit" onClick={this.handleFormSubmit}>
                SEARCH BY ZIP
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
//
export default withAuth(Find);
