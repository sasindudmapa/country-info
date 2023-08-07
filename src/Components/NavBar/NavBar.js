import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="navbar">
      <h1 className="navbar__title">
        <Link style={{ color: "white", textDecoration: "none" }} to="/">
          What in the world?
        </Link>
      </h1>
    </div>
  );
}

export default NavBar;
