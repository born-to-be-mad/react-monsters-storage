import React from "react";
import "./card.styles.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="card-container1">
      <img
        alt="Monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
