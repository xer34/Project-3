import React from "react";
import GoogleLogin from "react-google-login";
import Nav from "../Navbar";
import API from "../../utils/API";

const responseGoogle = response => {
  // console.log(response.profileObj)
  API.saveUser(response.profileObj)
};

function Login() {
  console.log("myenv", process.env)
  return (
    <div>
      <div id="bg">
        <Nav />
        <GoogleLogin
          clientId="1010648916500-t0kv6tapi4m7ljopvnsnkllrv6d1v442.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
        />
      </div>
    </div>
  );
}

export default Login;
