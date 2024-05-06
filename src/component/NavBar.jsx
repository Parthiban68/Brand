import React, { useState } from "react";
import { Link, NavLink, Navigate } from "react-router-dom";
import "../css section/navbar.css";
import logoimage from '../assets/Image/Brand Information_transparent.png'

import { useAuth } from "./Auth";

function NavBar() {
  const auth=useAuth()
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">

        <img id="logo-image" src={logoimage} alt="web logo" width={"100px"} height={"100px"}
          style={{ position: "relative", bottom: "25px", right: "5px", borderRadius: "100%" }} />

        {/* <a href="#"> </a> */}
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/prodect"}>Product</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
            {/* <NavLink to={"/sign-in"}>sign in</NavLink> */}
            {/* <NavLink to={"/profile"}>Profile</NavLink> */}
            {/* <NavLink to={"/log-in"}>Login</NavLink> */}
            {auth.user && (<NavLink to={"/profile"}>Profile</NavLink>)}
            {!auth.user && (<NavLink to={"/log-in"}>Login</NavLink>)}
            {!auth.user && (<NavLink to={"/sign-in"}>sign in</NavLink>)} 

          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

