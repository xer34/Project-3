import React from "react";
import "./index.css";
import API from "../../utils/API";
import Nav from "../Navbar";
import Sidebar from "../Sidebar";
//
class Profile extends React.Component {
  state = {
    _id: "",
    googleId: "",
    givenName: "",
    familyName: ""
  };
//
  ComponentDidMount() {
    console.log("component did mount");
    this.getUser();
  }
//
  getUser() {
    API.getOneUser()
    .then(res =>
      this.setState({
        _id: "",
        googleId: "",
        givenName: "",
        familyName: ""
      })
    );
  }
  //
  render() {
    return (
      <div>
        <Nav />
        <Sidebar name={this.state.firstName} />
      </div>
    );
  }
}
//
export default Profile;
