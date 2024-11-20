import React, { useEffect, useState } from "react";
import LostItemCard from "./LostItemCard";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import "./App.css";

const LostItemList = () => {
  const [items, setItems] = useState([]); // Holds the list of items
  const [error, setError] = useState(null); // Holds any error message
  const [isLoading, setIsLoading] = useState(true); // Indicates loading state

  useEffect(() => {
    fetch("/lostitems")
      .then((res) => {
        if (!res.ok) {
          // Throw an error for HTTP response codes outside the 200-299 range
          throw new Error(
            `Failed to fetch data: ${res.status} ${res.statusText}`
          );
        }
        return res.json();
      })
      .then((data) => {
        // Check if the data is an array and update state accordingly
        setItems(Array.isArray(data) ? data : []);
        setError(null); // Clear any previous error
      })
      .catch((err) => {
        // Catch and set errors to be displayed in the UI
        console.error("Error fetching data:", err);
        setError(err.message);
      })
      .finally(() => {
        // Ensure loading state is stopped after the fetch completes
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="lost-item-list">
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

        {isLoading && <p>Loading items...</p>}

        {error && <p className="error-message">Error: {error}</p>}

        {!isLoading && !error && items.length === 0 && (
          <p>No lost items found. Check back later!</p>
        )}

        {!isLoading &&
          !error &&
          items.map((item) => <LostItemCard key={item.id} item={item} />)}
      </main>
    </div>
  );
};

export default LostItemList;
