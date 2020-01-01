import React from "react";
import "./card.styles.css";

export const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="Monster"
        src={`https://robohash.org/${props.item.id}?set=set2&size=180x180`}
      />
      <h1>{props.item.name}</h1>
      <p>{props.item.email}</p>
    </div>
  );
};
