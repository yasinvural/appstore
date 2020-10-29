import React from "react";
import Rating from "../Rating/Rating";

import "./Card.css";

const Card = ({ app }) => {
  const { name, description, ownerName, rating, imgUrl } = app;
  return (
    <div className="card">
      <div className="cardImage">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="cardBody">
        <div className="appName">{name}</div>
        <div className="description">{description}</div>
        <div className="cardBottom">
          <div className="ownerName">{ownerName}</div>
          <Rating rating={rating} />
        </div>
      </div>
    </div>
  );
};

export default Card;
