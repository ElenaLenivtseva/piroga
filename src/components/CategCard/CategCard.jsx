import React from "react";
import { Link } from "react-router-dom";
import "./CategCard.scss";

const CategCard = ({ item }) => {
  return (
    <Link to={`/categories/${item.type}`}>
      <div className="category-card">
        <img
          className="category-card__img"
          src={item.mainImg}
          alt={item.title}
        />
        <h4 className="category-card__title">{item.title}</h4>
      </div>
    </Link>
  );
};

export default CategCard;
