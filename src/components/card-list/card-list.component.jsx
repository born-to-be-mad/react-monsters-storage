import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ items }) => {
  console.log("CardList");
  return (
    <div className="card-list">
      {items.map((item, index) => {
        return (
          <Card key={index} id={item.id} name={item.name} email={item.email} />
        );
      })}
    </div>
  );
};

export default CardList;
