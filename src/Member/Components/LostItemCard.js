import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; // Ensure styles are applied

const LostItemCard = ({ item }) => {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <Link to={`/lostitem/${item.id}`} state={{ item }}>
        <img src={item.image_url} alt={item.name} className="card-image" />
        <div className="body">
          <h3>{item.name}</h3>
          <p>
            <strong>Place Lost:</strong> {item.place_lost}
          </p>
          <p>
            <strong>Description:</strong> {item.description || "No description available"}
          </p>
          <p>
            <strong>Reward:</strong> {item.reward || "No reward specified"}
          </p>
          <p>
            <strong>Status:</strong> {item.status || "Unknown"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LostItemCard;
