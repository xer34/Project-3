import React from "react";

function Nav() {
  return (
    
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="/">R E C L U S I A M</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/Login">Login</a>
      <a className="nav-item nav-link" href="/Register">Register</a>
      <a className="nav-item nav-link" href="/About">About</a>
      <a className="nav-item nav-link" href="/Contact">Contact</a>
    </div>
  </div>
</nav>

  )
}

export default Nav;
