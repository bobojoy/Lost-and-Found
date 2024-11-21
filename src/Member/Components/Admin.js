import React, { useEffect, useState } from "react";
import LostItemFormComponent from "./LostItemFormComponent";
import LostItemList from "./LostItemList";
import NavBar from "./NavBar";
import { BASEURL } from "../../constants";
import "./Admin.css";

const Admin = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch items from the API on component mount
  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`${BASEURL}/lostitems`);
        const data = await response.json();
        setItems(Array.isArray(data) ? data : []);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchItems();

    // Listen for newly added items
    const handleNewItem = (event) => {
      setItems((prevItems) => [event.detail, ...prevItems]);
    };
    window.addEventListener("item-added", handleNewItem);

    return () => {
      window.removeEventListener("item-added", handleNewItem);
    };
  }, []);

  // Add a new item
  const addLostItem = (newItem) => {
    setItems((prevItems) => [newItem, ...prevItems]);
  };

  // Handle Approving or Rejecting an Item
  const handleApproval = async (id, action) => {
    try {
      const response = await fetch(`${BASEURL}/lostitems/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: action === "approve" ? "approved" : "rejected",
        }),
      });

      if (!response.ok) throw new Error("Failed to update item status");

      const updatedItem = await response.json();
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, status: updatedItem.status } : item
        )
      );
    } catch (error) {
      console.error("Error updating item:", error);
    }
  };

  // Handle Deleting an Item
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        const response = await fetch(`${BASEURL}/lostitems/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error("Failed to delete item");

        setItems((prevItems) => prevItems.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div className="admin-dashboard">
      <header className="header">
        <NavBar />
      </header>

      <main className="admin-main-content">
        <h1>Admin Dashboard</h1>

        <section className="form-section">
          <LostItemFormComponent addLostItem={addLostItem} />
        </section>

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <section className="item-list-section">
            <LostItemList
              items={items}
              onApprove={(id) => handleApproval(id, "approve")}
              onReject={(id) => handleApproval(id, "reject")}
              onDelete={handleDelete}
            />
          </section>
        )}
      </main>
    </div>
  );
};

export default Admin;