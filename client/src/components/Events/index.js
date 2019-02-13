import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";
import styles from "./index.css";
import EventCard from "../EventCard";
import axios from "axios";
import { Container, Row } from "reactstrap";

//Our higher order component
import withAuth from "../withAuth";

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.confirm.username
    };
  }

  componentDidMount() {
    axios
      .post("/Events", {
        name: this.state.name
      })
      .then(data => {
        console.log("data", data);
        var userData = data.data;
        this.setState({
          id: userData.id,
          location: userData.location
        });
        console.log(this.state);
      })
    
        const apiKey = process.env.REACT_APP_API_KEY;
        const zipCode = this.state.location
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
                return axios.post("/Events", {
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
                  pathname: "/Events",
                  state: { matches: this.state.matches }
                });
            });
          });
      };
  

  render() {
    return (
      <div className={styles.background}>
        <ProfileNav />
        <Container>
          <Row>
            <br />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </Row>
        </Container>
      </div>
    );
  }
}

export default withAuth(Events);
