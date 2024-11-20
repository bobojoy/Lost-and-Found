import React from "react";
import { CheckCircle2, XCircle, MapPin, Calendar } from "lucide-react";
import "./ItemCard.css"; // Import the CSS file

const ItemCard = ({ item, onStatusChange, onAcceptClaim }) => {
  // Highlight specific items (like 'Laptop' or 'iPhone 12 Pro')
  const isHighlightedItem =
    item.title === "Laptop" || item.title === "iPhone 12 Pro";

  // Handle reward status and display
  const rewardStatusText = item.rewardTransferred
    ? "Reward Transferred"
    : "Reward Pending";

  return (
    <div className={`item-card ${isHighlightedItem ? "highlighted" : ""}`}>
      <img src={item.image} alt={item.title} className="item-card-image" />
      <div className="item-card-body">
        <div className="item-card-header">
          <h3
            className={`item-card-title ${
              isHighlightedItem ? "highlighted-title" : ""
            }`}
          >
            {item.title}
          </h3>
          <span className={`status-badge ${item.status}`}>
            {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
          </span>
        </div>
        <p className="item-description">{item.description}</p>
        <div className="item-card-footer">
          <div className="item-location">
            <MapPin className="icon" />
            <span className="text-sm">{item.location}</span>
          </div>
          <div className="item-date">
            <Calendar className="icon" />
            <span className="text-sm">
              {new Date(item.date).toLocaleDateString()}
            </span>
          </div>
        </div>

        {/* Show the reward status */}
        {item.rewardTransferred && (
          <div className="reward-status">
            <span className="reward-status-text">{rewardStatusText}</span>
          </div>
        )}

        {/* If the status is pending, show approve/decline buttons */}
        {item.status === "pending" && (
          <div className="action-buttons">
            <button
              onClick={() => onAcceptClaim(item.id, item.foundBy)}
              className="approve-button"
              aria-label="Approve"
            >
              <CheckCircle2 className="icon-small" />
              Approve
            </button>
            <button
              onClick={() => onStatusChange(item.id, "declined")}
              className="decline-button"
              aria-label="Decline"
            >
              <XCircle className="icon-small" />
              Decline
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemCard;
