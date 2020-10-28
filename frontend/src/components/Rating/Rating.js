import React from "react";
import "./Rating.css";

const Rating = ({ rating }) => {
  const ratingValue = Math.round(rating);
  const result = [];
  for (let i = 0; i < 5; i++) {
    if (i < ratingValue) {
      result.push(
        <span role="img" aria-label="rating" className="ratingIcon" key={i}>
          ⭐
        </span>
      );
    } else {
      result.push(
        <span
          role="img"
          aria-label="rating"
          className="ratingIcon empty"
          key={i}
        >
          ⭐
        </span>
      );
    }
  }
  return <div className="rating">{result}</div>;
};

export default Rating;
