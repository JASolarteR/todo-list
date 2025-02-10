import React from "react";

/* eslint-disable react/prop-types */
export const Tag = ({ tag }:{tag: string}) => {
  const handleTagColor = () => {
    switch (tag) {
      case "high":
        return { backgroundColor: "red", color: "white" };

      case "mid":
        return { backgroundColor: "yellow", color: "black" };

      case "low":
        return { backgroundColor: "green", color: "white" };

      default:
        return { backgroundColor: "gray", color: "white" };
    }
  };

  const tagStyle = handleTagColor();

  return (
    <p
      style={{
        ...tagStyle,
        padding: "0.1rem 0.5rem",
        borderRadius: "0.5rem",
        fontSize: "12px",
        fontWeight: "lighter",
      }}
    >
      {tag}
    </p>
  );
};
