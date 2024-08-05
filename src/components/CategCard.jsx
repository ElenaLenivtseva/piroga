import React from "react";
import "./CategCard.scss";
import { Link } from "react-router-dom";

const CategCard = ({ item }) => {
  return (
    <div className="categCard">
      <Link to={`/categories/${item.type}`}>
        <div>
          <img src={item.mainImage} alt={item.title} />
          <h4>{item.title}</h4>
          <p>{item.products.length} блюда</p>
        </div>
      </Link>
    </div>
  );
};

export default CategCard;
