import React, { useState } from "react";
import createButtons from "./createButtons.jsx";

const Hamburger = () => {
  const [hamActive, setHamActive] = useState(false);
  const hamClass = `hamburger${hamActive ? "--active" : ""}`;
  const menuClass = `dropdown${hamActive ? "--active" : ""}`;
  const [activeButton, setActiveButton] = useState(0);

  return (
    <div className="menu-list-screen">
      <button className={hamClass} onClick={() => setHamActive(!hamActive)}>
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
      <div className={menuClass}>
        <ul>
          {createButtons(
            ["One", "Two", "Three", "Four"],
            activeButton,
            setActiveButton
          )}
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
