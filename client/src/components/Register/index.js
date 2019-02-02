import React from "react";
import "./index.css"
import Nav from "../Navbar";

function Register() {
  return (
    <div >
    <div id="bg"></div>
<Nav />
<form action="">
    
  <label htmlFor=""></label>
  <input type="text" name="" id="" placeholder="email" className="email" />
    
  <label htmlFor=""></label>
  <input type="password" name="" id="" placeholder="password" className="pass" />

  <label htmlFor=""></label>
  <input type="password" name="" id="" placeholder="re-enter password" className="pass" />
    
  <button type="submit">Register for New Account</button>
   
</form>


    </div>
  );
}

export default Register;
