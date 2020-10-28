import React from "react";
import Rating from "../Rating/Rating";

import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="cardImage">
        <img
          src="https://i.picsum.photos/id/1032/200/200.jpg?hmac=-JIXcXajDj2GCogfs0jQkvF3T_UiNtvco5Nqbe_Sl4g"
          alt="img"
        />
      </div>
      <div className="cardBody">
        <div className="appName">App Name</div>
        <div className="description">
          Lorem ipsum lorem ipsum qualy lorem ipsum lorem ipsum loreim ipsuqma
        </div>
        <div className="cardBottom">
          <div className="ownerName">Owner Name</div>
          <Rating rating="3" />
        </div>
      </div>
    </div>
  );
};

export default Card;
