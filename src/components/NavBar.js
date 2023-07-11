import React from 'react'
import { NavLink } from "react-router-dom";
import '../index.css';


function NavBar() {
  return (
      <div>
        <nav className="navbar">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar