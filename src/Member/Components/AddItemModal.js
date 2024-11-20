import React, { useState } from "react";
import { X } from "lucide-react";
import "./AddItem.css"; // Importing the CSS file

const AddItemModal = ({ isOpen, onClose, onAdd, type }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: new Date().toISOString().split("T")[0],
    image: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ ...formData, type });
    setFormData({
      title: "",
      description: "",
      location: "",
      date: new Date().toISOString().split("T")[0],
      image: "",
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-background" onClick={onClose}></div>
        <div className="modal-box">
          <div className="modal-header">
            <h2 className="modal-title">
              Report {type === "found" ? "Found" : "Lost"} Item
            </h2>
            <button onClick={onClose} className="close-btn">
              <X className="h-6 w-6" />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            {/* Title Field */}
            <div className="form-group">
              <label className="label">Title</label>
              <input
                type="text"
                required
                className="input"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
            </div>
            {/* Description Field */}
            <div className="form-group">
              <label className="label">Description</label>
              <textarea
                required
                rows="3"
                className="textarea"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              />
            </div>
            {/* Location Field */}
            <div className="form-group">
              <label className="label">Location</label>
              <input
                type="text"
                required
                className="input"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>
            {/* Date Field */}
            <div className="form-group">
              <label className="label">Date</label>
              <input
                type="date"
                required
                className="input"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
            </div>
            {/* Image URL Field */}
            <div className="form-group">
              <label className="label">Image URL</label>
              <input
                type="url"
                required
                className="input"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
              />
            </div>
            {/* Submit Button */}
            <div className="form-group">
              <button type="submit" className="button">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
