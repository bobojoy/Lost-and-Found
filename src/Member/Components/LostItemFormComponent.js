import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function LostItemFormComponent() {
  const [formData, setFormData] = useState({
    itemName: "",
    itemColor: "",
    itemBrand: "",
    itemLocationLost: "",
    itemDateLost: "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    itemImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      itemImage: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Lost item details submitted:", formData);

    localStorage.setItem("lastLostItem", JSON.stringify(formData));

    setFormData({
      itemName: "",
      itemColor: "",
      itemBrand: "",
      itemLocationLost: "",
      itemDateLost: "",
      contactName: "",
      contactEmail: "",
      contactPhone: "",
      itemImage: null,
    });

    navigate("/lostitems");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Lost Item Report</h2>

      <div className="inputGroup">
        <label htmlFor="itemImage">Upload Image</label>
        <input
          type="file"
          id="itemImage"
          name="itemImage"
          onChange={handleImageUpload}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="itemName">Item Lost</label>
        <input
          type="text"
          id="itemName"
          name="itemName"
          value={formData.itemName}
          onChange={handleChange}
          placeholder="Enter the item name"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="itemColor">Item Color</label>
        <input
          type="text"
          id="itemColor"
          name="itemColor"
          value={formData.itemColor}
          onChange={handleChange}
          placeholder="Enter the item color"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="itemBrand">Item Brand</label>
        <input
          type="text"
          id="itemBrand"
          name="itemBrand"
          value={formData.itemBrand}
          onChange={handleChange}
          placeholder="Enter the brand of the item"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="itemLocationLost">Location Lost</label>
        <input
          type="text"
          id="itemLocationLost"
          name="itemLocationLost"
          value={formData.itemLocationLost}
          onChange={handleChange}
          placeholder="Enter where the item was lost"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="itemDateLost">Date Lost</label>
        <input
          type="date"
          id="itemDateLost"
          name="itemDateLost"
          value={formData.itemDateLost}
          onChange={handleChange}
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="contactName">Your Name</label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="contactEmail">Email</label>
        <input
          type="email"
          id="contactEmail"
          name="contactEmail"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="contactPhone">Phone Number</label>
        <input
          type="tel"
          id="contactPhone"
          name="contactPhone"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          required
        />
      </div>

      <button type="submit" className="submitButton">
        Submit Lost Item
      </button>
    </form>
  );
}

export default LostItemFormComponent;
