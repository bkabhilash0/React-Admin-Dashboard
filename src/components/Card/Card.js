import React from "react";
import './Card.css';

const Card = ({ icon, text, value }) => (
  <div className="card">
    <i className={icon}></i>
    <div className="card_inner">
      <p className="text-primary-p">{text}</p>
      <span className="font-bold text-title">{value}</span>
    </div>
  </div>
);

export default Card;
