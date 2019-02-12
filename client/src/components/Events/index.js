import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";
import styles from "./index.css";
import EventCard from "../EventCard";
import { Container, Row, Col } from "reactstrap";

//Our higher order component
import withAuth from "../withAuth";

class Events extends Component {
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
