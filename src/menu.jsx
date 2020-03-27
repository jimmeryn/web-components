import React from "react";
import { Link } from "react-router-dom";

const Menu = () => (
  <div className="menu">
    <ul className="menu-links">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/nav">
        <li>Nav</li>
      </Link>
      <Link to="/ham">
        <li>Ham</li>
      </Link>
    </ul>
  </div>
);
export default Menu;
