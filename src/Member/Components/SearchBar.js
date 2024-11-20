import React from "react";
import { Search } from "lucide-react";

const SearchBar = ({ value, onChange }) => {
  return React.createElement(
    "div",
    { className: "relative" },
    React.createElement(
      "div",
      {
        className:
          "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",
      },
      React.createElement(Search, { className: "h-5 w-5 text-gray-400" })
    ),
    React.createElement("input", {
      type: "text",
      placeholder: "Search items...",
      "aria-label": "Search items",
      className:
        "block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm",
      value: value,
      onChange: (e) => onChange(e.target.value),
    }),
    value &&
      React.createElement(
        "div",
        { className: "absolute inset-y-0 right-0 pr-3 flex items-center" },
        React.createElement(
          "button",
          {
            onClick: () => onChange(""),
            className: "text-gray-400 hover:text-gray-600 focus:outline-none",
            "aria-label": "Clear search",
          },
          "×"
        )
      )
  );
};

export default SearchBar;
