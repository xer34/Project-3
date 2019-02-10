import React from "react";
import style from "./about.css";
import Nav from "../Navbar";
import LazyHero from "react-lazy-hero";

function About() {
  return (
    <div className={style.background}>
      <Nav />
      <LazyHero
        className={style.lazyhero}
        imageSrc="https://i.imgur.com/kOlZDBf.jpg"
        opacity={0.1}
        minHeight="50vh"
        parallaxOffset={100}
        isFixed={false}
        isCentered={true}
      >
        <h1>Built for all breeds of tabletop gamers.</h1>
      </LazyHero>

      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <header className="jumbotron my-4">
          <h1 className="display-3">Welcome.</h1>
          <p className="lead">
            This is The Reclusiam. Your place in the deep void of space to call
            home. Here you can connect with like-minded individuals to share the
            games and hobbies we all enjoy.
          </p>
          <a href="/Register" className="btn btn-primary btn-lg">
            Register
          </a>
        </header>

        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="images/1.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Find. Meet. Play.</h4>
                <p className="card-text">
                  Connect with people near you. Create and join events. Get
                  playing faster.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="images/2.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">A Focused Network</h4>
                <p className="card-text">
                  We're about the hobbies - this isn't a place for politics or
                  what you had for lunch.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="images/3.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Dungeon Masters Welcome</h4>
                <p className="card-text">
                  Strategy, planning, and new worlds to explore live here.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <div className="card">
              <img className="card-img-top" src="images/4.jpg" alt="" />
              <div className="card-body">
                <h4 className="card-title">Up Your Hobby</h4>
                <p className="card-text">
                  Painters, modelers, and folk who build dungeons out of
                  cardboard. All nerds welcome.
                </p>
              </div>
              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Find Out More!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="py-5 bg-dark">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Reclusiam 2019
          </p>
        </div>
      </footer>
    </div>
  );
}

export default About;
