import React, { useState } from "react";

const LostItemFormComponent = ({ addLostItem }) => {
  const [formData, setFormData] = useState({
    name: "",
    place_lost: "",
    description: "",
    reward: "",
    image_url: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate adding an item to the list (mock API response)
      const newItem = { ...formData, id: Date.now() };

      // Add new item to the list
      addLostItem(newItem);

      // Reset form and show success message
      setSuccess("Entry added successfully!");
      setError("");
      setFormData({
        name: "",
        place_lost: "",
        description: "",
        reward: "",
        image_url: "",
      });
    } catch (err) {
      setError("Failed to add entry.");
      setSuccess("");
    }
  };

  return (
    <div>
      <h2>ADD NEW ENTRY</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="place_lost">Place Lost:</label>
          <input
            type="text"
            id="place_lost"
            name="place_lost"
            value={formData.place_lost}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="reward">Reward:</label>
          <input
            type="text"
            id="reward"
            name="reward"
            value={formData.reward}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input
            type="text"
            id="image_url"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Entry</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
};

export default LostItemFormComponent;