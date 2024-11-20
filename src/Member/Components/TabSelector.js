import React from "react";

const TabSelector = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: "found", label: "Found Items" },
    { id: "lost", label: "Lost Items" },
    { id: "pending", label: "Claimed Items" },
  ];

  return React.createElement(
    "div",
    { className: "flex space-x-4" },
    tabs.map((tab) =>
      React.createElement(
        "button",
        {
          key: tab.id,
          onClick: () => onTabChange(tab.id),
          className: `px-4 py-2 rounded-md ${
            activeTab === tab.id
              ? "bg-indigo-600 text-white"
              : "bg-white text-gray-700 hover:bg-gray-50"
          }`,
          "aria-pressed": activeTab === tab.id,
        },
        tab.label
      )
    )
  );
};

export default TabSelector;
