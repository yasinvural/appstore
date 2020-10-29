import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Rating from "../Rating/Rating";

import "./Card.css";

const Card = ({ app }) => {
  const history = useHistory();
  const [isHover, setIsHover] = useState(false);
  const { _id, name, description, ownerName, rating, imgUrl } = app;

  const goDetails = () => {
    history.push(`/detail/${_id}`);
  };
  return (
    <div
      className="card"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="cardImage">
        <img src={imgUrl} alt="img" />
      </div>
      <div className="cardBody">
        <div className="appName">{name}</div>
        <div className="description">{description}</div>
        <div className="cardBottom">
          {isHover ? (
            <div className="goDetails" onClick={goDetails}>
              Go Details
            </div>
          ) : (
            <>
              <div className="ownerName">{ownerName}</div>
              <Rating rating={rating} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
