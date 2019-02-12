import React, { Component } from "react";
import "./index.css";

import styles from "./index.css";

//Our higher order component
import withAuth from "../withAuth";

class EventCard extends Component {
  render() {
    return (
      <div className={styles.card}>
          <div className="card mb-3">
            <h3 className="card-header">Card header</h3>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <h6 className="card-subtitle text-muted">
                Support card subtitle
              </h6>
            </div>
            <img
              style={{ height: "200px", width: "100%", display: "block" }}
              src="/images/peopleCard1.jpg"
              alt="Card"
            />
            <div className="card-body">
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <a href="/" className="card-link">
                Card link
              </a>
              <a href="/" className="card-link">
                Another link
              </a>
            </div>
            <div className="card-footer text-muted">2 days ago</div>
          </div>
        </div>
    );
  }
}

export default withAuth(EventCard);
