import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeStyle={{ background: "darkblue", }} >
        Home
      </NavLink>
      <NavLink to="/BoardGameContainer" activeStyle={{ background: "darkblue", }} >
        View Board Games
      </NavLink>
    </div>
  )
}

export default NavBar;
