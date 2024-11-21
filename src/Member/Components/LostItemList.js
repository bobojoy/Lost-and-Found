import React from "react";
import LostItemCard from "./LostItemCard";

const LostItemList = ({ items, onApprove, onReject, onDelete }) => {
  if (items.length === 0) {
    return <p>No lost items found.</p>;
  }

  return (
    <div className="lost-item-list">
      {items.map((item) => (
        <div className="lost-item-card" key={item.id}>
          <LostItemCard item={item} />
          <div className="admin-actions">
            <button
              className="approve-button"
              onClick={() => onApprove(item.id)}
              disabled={item.status === "approved"}
            >
              Approve
            </button>
            <button
              className="reject-button"
              onClick={() => onReject(item.id)}
              disabled={item.status === "rejected"}
            >
              Reject
            </button>
            <button
              className="delete-button"
              onClick={() => onDelete(item.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LostItemList;
