import React, { useState } from "react";
import createButtons from "./createButtons.jsx";
import Hamburger from "./hamburger.jsx";
import "./nav.css";

const makePage = () => (
  <div className="page">
    {Array(100)
      .fill(".")
      .map((e, i) => (
        <div>{`${e} ${i}`}</div>
      ))}
  </div>
);

const Nav = () => {
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="nav-background">
      <nav>
        <div className="logo"></div>
        <ul className="menu-list">
          {createButtons(
            ["One", "Two", "Three", "Four"],
            activeButton,
            setActiveButton
          )}
        </ul>
        <Hamburger />
      </nav>
      {makePage()}
    </div>
  );
};

export default Nav;
