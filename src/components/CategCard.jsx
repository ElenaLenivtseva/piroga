import React from "react";
import "./CategCard.scss";
import { Link } from "react-router-dom";

const CategCard = ({ item }) => {
  return (
    <div className="categCard">
      <Link to={`/categories/${item.type}`}>
        <div>
          <img src={item.mainImg} alt={item.title} />
          <h4>{item.title}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CategCard;
