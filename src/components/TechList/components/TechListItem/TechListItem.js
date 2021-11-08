import React from "react";
import "./TechListItem.css";

export const TechListItem = ({ icon, name }) => {
  return <div className = "tech-list-item">
      <img src={icon} alt="" className="tech-list-item__icon" />
      <div className="tech-list-item__name">{name}</div>
  </div>;
};
