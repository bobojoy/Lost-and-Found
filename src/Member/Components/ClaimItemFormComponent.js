import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function ClaimItemFormComponent() {
  const { state } = useLocation(); // Get the state passed from FoundItemDetailsPage
  const { item } = state || {}; // Extract item data

  const [formData, setFormData] = useState({
    itemName: item?.name || "",
    itemColor: item?.color || "",
    itemBrand: item?.brand || "",
    itemLocationFound: item?.placeFound || "",
    itemDateFound: item?.dateFound || "",
    contactName: "",
    contactEmail: "",
    contactPhone: "",
    itemImage: null,
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!item) {
      // If no item is passed, redirect to the found items list
      navigate("/founditems");
    }
  }, [item, navigate]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Claim details submitted:", formData);

    try {
      const response = await fetch(`/api/claim-item/${item.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Claim submitted successfully!");
        navigate("/founditems");
      } else {
        const errorData = await response.json();
        console.error("Claim submission failed:", errorData);
        alert(
          `Failed to submit the claim: ${errorData.message || "Unknown error"}`
        );
      }
    } catch (error) {
      console.error("Error submitting claim:", error);
      alert("Failed to submit the claim. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <h2>Claim Found Item</h2>

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
        Submit Claim
      </button>
    </form>
  );
}

export default ClaimItemFormComponent;
