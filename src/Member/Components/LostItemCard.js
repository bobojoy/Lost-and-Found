import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const LostItemCard = ({ item }) => {
  return (
    <div className="card" style={{ cursor: "pointer" }}>
      <Link to={`/lostitem/${item.id}`} state={{ item }}>
        <img src={item.image_url} alt={item.name} className="card-image" />
        <div className="body">
          <h3>{item.name}</h3>
          <p>
            <strong>Place Found:</strong> {item.place_lost}
          </p>
          <p>
            <strong>Date Found:</strong> {item.description}
          </p>
          <p>
            <strong>Reward:</strong> {item.reward}
          </p>
          <p>
            <strong>Reward:</strong> {item.status}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default LostItemCard;
