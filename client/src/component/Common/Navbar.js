import React from 'react';
import { getJWT } from "../../utils/jwt";

function useAuth() {
    const jwt = getJWT();
    return jwt && jwt !== "undefined" && jwt !== "null";
  }
function Navbar() {
    const isLoggedIn = useAuth();
    console.log(isLoggedIn)
    let login_button;
    let logout_button;
    let signup_button;
    if (isLoggedIn === true) {
     logout_button = <a class="btn-dark btn-outline-light RoundIT" href="/logout">Logout</a>;
     login_button = " ";
     signup_button = " ";
    } else {
      login_button = <a class="btn-dark btn-outline-light RoundIT" href="/login">Login</a>;
      signup_button= <a class="btn-dark btn-outline-light RoundIT" href="/signup">Signup</a>;
      logout_button = " ";
    }    
    return (
        <nav class="navbar navbar-light bg-dark">
        <a class="navbar-brand" href="#">
            <img src="../logo.png" width="30" height="30" class="d-inline-block align-top" alt=""/>
        &nbsp;<font color="white">My Reddit</font>
        </a>
        <form class="form-inline">
            <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">/r</span>
            </div>
            <input type="text" class="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
        </form>
        <div align="right">
        {signup_button}
        {login_button}
        {logout_button}

        </div>
        </nav>  

    )

}


export default Navbar;