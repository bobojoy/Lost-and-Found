import React from "react";
import { Package, ShieldQuestion, PlusCircle } from "lucide-react";
import "./AdminNav.css"; // Import the CSS file

const AdminNav = ({ activeTab, onAddClick }) => {
  const TabIcons = {
    found: React.createElement(Package, { className: "icon" }),
    lost: React.createElement(ShieldQuestion, { className: "icon" }),
  };

  return (
    <nav className="admin_navbar">
      <div className="admin_container">
        <div className="admin_navbar-content">
          <div className="admin_navbar-left">
            {TabIcons[activeTab]}
            <h1 className="admin_navbar-title">Lost & Found Portal</h1>
          </div>
          <button
            onClick={onAddClick}
            className="admin_add-item-btn"
            aria-label="Add Item"
          >
            <PlusCircle className="admin_add-item-icon" />
            Add Item
          </button>
        </div>
      </div>
    </nav>
  );
};

export default AdminNav;
