import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./App.css";

const LostItemDetailsPage = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/lost-items/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching item details:", error));
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="item-details">
      <h2>Lost Item Details</h2>
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>
        <strong>Description:</strong> {item.description}
      </p>
      <p>
        <strong>Place Lost:</strong> {item.placeLost}
      </p>
      <p>
        <strong>Date Lost:</strong> {item.dateLost}
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
    </div>
  );
};

export default LostItemDetailsPage;
