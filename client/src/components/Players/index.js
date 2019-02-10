import React, { Component } from "react";
import "./index.css";
import ProfileNav from "../ProfileNav";
import style from "./index.css";
import PlayerCard from "../PlayerCard";

//Our higher order component
import withAuth from "../withAuth";
class Players extends Component {
  state = { state: "" };
  render() {
    const importedState = this.props.history.location.state.matches;
    let tempArray = [];
    importedState.map(nested =>
      // eslint-disable-next-line
      nested.map(props => {
        tempArray.push({
          location: props.location,
          picture: props.picture,
          username: props.username
        });
      })
    );
    // console.log(tempArray);
    return (
      <div className={style.background}>
        <ProfileNav />
        <div>
          <section className="our-webcoderskull padding-lg">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-md-12 col-lg-12">
                  {tempArray.map((item, key) => {
                    return (
                      <PlayerCard
                        key={key}
                        src={item.picture}
                        username={item.username}
                        location={item.location}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default withAuth(Players);
