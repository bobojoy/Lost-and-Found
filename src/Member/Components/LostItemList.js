import React, { useEffect, useState } from "react";
import LostItemCard from "./LostItemCard";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./App.css";

const LostItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/lostitems")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log the data to check its structure
        setItems(Array.isArray(data) ? data : []); // Ensure it's an array
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="found-item-list">
      <header className="header">
        <NavBar />
      </header>

      <main className="listcard">
        <div className="report-button-container">
          <Link to="/report-lost-item">
            <button className="report-found-item-button">
              Report Lost Item
            </button>
          </Link>
        </div>

        {Array.isArray(items) &&
          items.map((item) => <LostItemCard key={item.id} item={item} />)}
      </main>
    </div>
  );
};

export default LostItemList;
