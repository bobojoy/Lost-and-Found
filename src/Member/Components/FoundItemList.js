// src/Components/FoundItemList.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Link for navigation
import FoundItemCard from "./FoundItemCard"; // Assuming you have a FoundItemCard component
import NavBar from "./NavBar"; // Assuming you have a NavBar component
import "./App.css";
import { BASEURL } from "../../constants";

const FoundItemList = () => {
  const [items, setItems] = useState([]);

  // Fetching the items (assuming API returns an array of found items)
  useEffect(() => {
    fetch(`${BASEURL}/founditems`)
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="found-item-list">
      <header className="header">
        <NavBar />
      </header>

      <main className="listcard">
        {/* Report found item button */}
        <div className="report-button-container">
          <Link to="/report-found-item">
            <button className="report-found-item-button">
              Report Found Item
            </button>
          </Link>
        </div>

        {/* Rendering the list of found items */}
        <div className="found-items-container">
          {items.length > 0 ? (
            items.map((item) => (
              <Link
                key={item.id}
                to={{
                  pathname: `/founditem/${item.id}`,
                  state: { item }, // Passing item data to FoundItemDetailsPage
                }}
              >
                <FoundItemCard item={item} />
              </Link>
            ))
          ) : (
            <p>No found items available</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default FoundItemList;
