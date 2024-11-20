import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function NavBar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <header>
          <div className="logo-container">
            {/* Replace 'your-logo-url' with the actual image URL */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT71KAKl0Tvwd5P2SFs1GjveEaaLIwNe-K0Vw&s"
              alt="Logo"
              className="logo"
            />
          </div>
          <ul className="navbar">
            <NavLink to="/">
              <li>
                <a href="#home">Home</a>
              </li>
            </NavLink>
            <NavLink to="/lostitems">
              <li>
                <a href="#">Lost Items</a>
              </li>
            </NavLink>
            <NavLink to="/founditems">
              <li>
                <a href="#">Found Items</a>
              </li>
            </NavLink>
            <NavLink to="/signup">
              <li>
                <a href="#">Sign Up</a>
              </li>
            </NavLink>

            <NavLink to="/logout">
              <li>
                <a href="#">LogOut</a>
              </li>
            </NavLink>
            <NavLink to="/admin">
              <li>
                <a href="#">Admin</a>
              </li>
            </NavLink>
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default NavBar;
