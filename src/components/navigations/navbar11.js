import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    margin: 10,
  };
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={listStyle}>
           
            <Link to={"/"} style={linkStyle}>
              Home
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
            
            <Link to={"/about"} style={linkStyle}>
              About
            </Link>
          </li>
          <li className="nav-item" style={listStyle}>
          
           <Link to={"/contact"} style={linkStyle}>
              contact
            </Link>
            </li>
         
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
