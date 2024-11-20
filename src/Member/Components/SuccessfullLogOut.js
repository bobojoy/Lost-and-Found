// src/User/Components/SuccessfulLogout.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css"; // Import the CSS file

const SuccessfullLogOut = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Redirect to the home page
  };

  return (
    <div className="successful-logout-container">
      <h1>Congratulations, you have successfully logged out!</h1>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default SuccessfullLogOut;
