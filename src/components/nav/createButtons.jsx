import React from "react";

const navButton = (name, active, id, setActiveButton) => {
  const buttonClass = `nav-button${active === id ? " active" : ""}`;
  const indicatorClass = `indicator${active === id ? "-active" : ""}`;
  return (
    <li className={buttonClass} key={id} onClick={() => setActiveButton(id)}>
      <h1>{name}</h1>
      <span className={indicatorClass}></span>
    </li>
  );
};

const createButtons = (names, activeButton, setActiveButton) =>
  names.map((name, i) => navButton(name, activeButton, i, setActiveButton));

export default createButtons;
