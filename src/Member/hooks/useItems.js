import { useState, useCallback } from "react";

// Initial mock items for testing
const initialItems = [
  {
    id: 1,
    title: "Apple Watch Series 7",
    description: "Found in the central park area, space gray color",
    location: "Central Park",
    date: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1551816230-ef5deaed4a26?auto=format&fit=crop&q=80&w=1000",
    status: "pending", // 'pending', 'approved', 'declined', 'found'
    type: "found", // 'found', 'lost'
    rewardTransferred: false, // New field to track if the reward has been transferred
    foundBy: "John Doe", // User who found the item (in case of found items)
  },
  {
    id: 2,
    title: "Brown Leather Wallet",
    description: "Lost near the coffee shop, contains ID cards",
    location: "Downtown Coffee Shop",
    date: "2024-03-14",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&q=80&w=1000",
    status: "pending", // 'pending', 'approved', 'declined', 'found'
    type: "lost", // 'found', 'lost'
    rewardTransferred: false, // New field to track if the reward has been transferred
    foundBy: "N/A", // This will be empty for lost items
  },
];

export const useItems = () => {
  const [items, setItems] = useState(initialItems);

  // Function to update the status of an item
  const handleStatusChange = useCallback((itemId, newStatus) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === itemId) {
          if (newStatus === "approved" && item.status === "pending") {
            // If the claim is approved, transfer the reward
            return { ...item, status: "found", rewardTransferred: true }; // Mark reward as transferred
          } else if (newStatus === "declined") {
            // If the claim is declined, reset the status to pending
            return { ...item, status: "pending", rewardTransferred: false }; // Reset reward status
          }
        }
        return item;
      })
    );
  }, []);

  // Function to add a new item (e.g., report a found/lost item)
  const handleAddItem = useCallback((newItem) => {
    setItems((prevItems) => [
      ...prevItems,
      {
        ...newItem,
        id: prevItems.length + 1,
        status: "pending", // New items are always pending
        rewardTransferred: false, // Set rewardTransferred to false initially
      },
    ]);
  }, []);

  return {
    items,
    handleStatusChange,
    handleAddItem,
  };
};
