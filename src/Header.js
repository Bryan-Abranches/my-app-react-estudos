import React from "react";
import Menu from "./Menu"
import "./App.css";

function Header(props) {
  return (
    <header>
      <div>
        <h1>{props.name}</h1>
      </div>
      <div>
      <Menu links = {props.links}></Menu>

      </div>

    </header>
  );
}


export default Header;
