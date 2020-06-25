import React from "react";
import Menu from "../menu.jsx";
import ReactLogo from "./reactLogo/reactLogo.jsx";

const Home = () => (
  <div className="home-background">
    <Menu />
    <h1>Web Components</h1>
    <h3>Page is used to create different web components for future use</h3>
    <ReactLogo />
  </div>
);

export default Home;
