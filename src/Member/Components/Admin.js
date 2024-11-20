import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
import TabSelector from "./TabSelector";
import SearchBar from "./SearchBar";
import ItemCard from "./ItemCard";
import AddItemModal from "./AddItemModal";
import { useItems } from "../hooks/useItems"; // Assuming this hook fetches items
import "./Admin.css";

function Admin() {
  const { items, setItems } = useItems(); // Use custom hook to manage items state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("found");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Fetch the latest items when the component is mounted or updated
    const fetchItems = async () => {
      const response = await fetch("/api/items");
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, [setItems]);

  // Filter items based on tab and search query
  const filteredItems = items.filter(
    (item) =>
      (activeTab === "pending"
        ? item.status === "pending"
        : item.type === activeTab) &&
      (item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="admin-container">
      <AdminNav activeTab={activeTab} onAddClick={() => setIsModalOpen(true)} />

      <main className="main-content">
        <div className="content-wrapper">
          <TabSelector activeTab={activeTab} onTabChange={setActiveTab} />

          <SearchBar value={searchQuery} onChange={setSearchQuery} />

          <div className="item-grid">
            {filteredItems.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                onStatusChange={() => {}} // Placeholder for status change handler
                onAcceptClaim={() => {}} // Placeholder for claim acceptance
              />
            ))}
          </div>
        </div>
      </main>

      {isModalOpen && (
        <AddItemModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={() => {}} // Your item add handler here
          type={activeTab}
        />
      )}
    </div>
  );
}

export default Admin;
