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
                Home
              </li>
            </NavLink>
            <NavLink to="/lostitempage">
              <li>
               Lost Items Page
              </li>
            </NavLink>
            <NavLink to="/founditems">
              <li>
               Found Items
              </li>
            </NavLink>
            <NavLink to="/signup">
              <li>
               Sign Up
              </li>
            </NavLink>
  
            <NavLink to="/logout">
              <li>
               LogOut
              </li>
            </NavLink>
            <NavLink to="/admin">
              <li>
               Admin
              </li>
            </NavLink>
          
            
          </ul>
        </header>
      </nav>
    </div>
  );
}

export default NavBar;
