// src/User/Components/LogOut.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform logout (e.g., clear localStorage, session, etc.)
    navigate("/successfullogout"); // Navigate to the successful logout page
  };

  const handleCancel = () => {
    navigate("/"); // Redirect to the home page when Cancel is clicked
  };

  return (
    <div className="logout-container">
      <h1>Are you sure you want to log out?</h1>
      <div className="logout-buttons">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
        <button onClick={handleCancel} className="cancel-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOut;
