import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import withAuth from "../withAuth";
import axios from "axios";
import "./index.css";
import ProfileNav from "../ProfileNav";
import AuthHelperMethods from "../AuthHelperMethods";

class ProfileSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      name: this.props.confirm.username,
      location: "",
      picture: "",
      banner: ""
    };
  }


  componentDidMount() {
    axios
      .post("/Profile", {
        name: this.state.name
      })
      .then(data => {
        console.log("data", data);
        var userData = data.data;
        this.setState({
          id: userData.id,
          username: userData.username
        });
        console.log(this.state);
      });
  }

  Auth = new AuthHelperMethods();

  handleFormSubmit = e => {
    e.preventDefault();
    axios
      .post("/ProfileSettings", {
        username: this.state.username,
        picture: this.state.picture,
        banner: this.state.banner,
        location: this.state.location
      })
      .then(data => {
        console.log(data);
        this.props.history.replace("/Profile");
      });
  };

  _handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <ProfileNav />
        <img src="/images/loginBackground.jpg" alt="bg" className="bg" />
        <Form>
          <FormGroup>
            <Label for="picture">Profile Picture URL</Label>
            <Input
              type="picture"
              name="picture"
              id="picture"
              placeholder="URL For Custom Picture"
              onChange={this._handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="banner">Banner Picture URL</Label>
            <Input
              type="banner"
              name="banner"
              id="banner"
              placeholder="URL For Custom Banner"
              onChange={this._handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="location">Zip Code</Label>
            <Input
              type="location"
              name="location"
              id="location"
              placeholder="Enter 5 Digit Zip Here"
              onChange={this._handleChange}
            />
          </FormGroup>

          <Button onClick={this.handleFormSubmit}>Submit</Button>
        </Form>
      </div>
    );
  }
}
export default withAuth(ProfileSettings);
