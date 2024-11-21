// src/Components/FoundItemDetailsPage.js
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

const LostItemDetailsPage = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook
  const location = useLocation();
  const { item } = location.state || {}; // Get item from location state

  const [comment, setComment] = useState(""); // Local state for comment
  const [commentsList, setCommentsList] = useState([]); // State to store the list of comments

  if (!item) {
    return <p>Item not found</p>;
  }

  // Handle navigation to claim item form
  const handleClaimClick = () => {
    navigate(`/claim-item/${item.id}`, { state: { item } });
  };

  // Handle comment submission
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setCommentsList([...commentsList, comment]);
      setComment(""); // Clear the input after submission
    }
  };

  return (
    <div className="item-details">
      <h2>LostItem Details</h2>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Place Lost:</strong> {item.placeFound}
      </p>
      <p>
        <strong>Date Lost:</strong> {item.dateFound}
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

      <h3>Comments</h3>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
        />
        <button type="submit">Submit Comment</button>
      </form>

      <div className="comments-list">
        {commentsList.length > 0 ? (
          commentsList.map((comment, index) => (
            <div key={index} className="comment">
              <p>{comment}</p>
            </div>
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </div>
  );
};

export default LostItemDetailsPage;
