// src/Components/FoundItemDetailsPage.js
import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useNavigate and useLocation
import "./App.css";

const FoundItemDetailsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation();
  const { item } = location.state || {}; // Get item from location state

  if (!item) {
    return <p>Item not found</p>;
  }

  // Handle navigation to claim item form
  const handleClaimClick = () => {
    navigate(`/claim-item/${item.id}`, { state: { item } });
  };

  return (
    <div className="item-details">
      <h2>Found Item Details</h2>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Place Found:</strong> {item.placeFound}
      </p>
      <p>
        <strong>Date Found:</strong> {item.dateFound}
      </p>
      <p>
        <strong>Reward:</strong> {item.reward}
      </p>
      <p>
        <strong>Contact Name:</strong> {item.contactName}
      </p>
      <p>
        <strong>Contact Email:</strong> {item.contactEmail}
      </p>
      <p>
        <strong>Contact Phone:</strong> {item.contactPhone}
      </p>

      <button onClick={handleClaimClick}>Claim</button>
    </div>
  );
};

export default FoundItemDetailsPage;
