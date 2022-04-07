import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <ul>
        <Link to='/' className="logo">
          <li>
            <span>SimChat</span>
          </li>
        </Link>
      </ul>
      {/* <ul>
        <li>
          <Link to="/About" >About</Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Navbar;
