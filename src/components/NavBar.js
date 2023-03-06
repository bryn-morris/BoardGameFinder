import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeStyle={{ background: "darkblue", }} >
        Home
      </NavLink>
      <NavLink to="/movies" activeStyle={{ background: "darkblue", }} >
        Movies
      </NavLink>
      <NavLink to="/directors" activeStyle={{ background: "darkblue", }} >
        Directors
      </NavLink>
      <NavLink to="/actors" activeStyle={{ background: "darkblue", }} >
        Actors
      </NavLink>
    </div>
  )
}

export default NavBar;
