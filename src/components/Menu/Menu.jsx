import React from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

const Menu = () => {
  return (
    <div className="menu">
      <div className="menu__left">
        <Link className="menu__item" to="/">
          Главная
        </Link>
        <Link className="menu__item" to="/about">
          О нас
        </Link>
        <Link className="menu__item" to="/delivery">
          Доставка
        </Link>
        <Link className="menu__item" to="/cart">
          Корзина
        </Link>
        <Link className="menu__item" to="/admin">
          Для администратора
        </Link>
      </div>
      <div className="menu__right">
        <a href="tel:83822414425" className="menu__item">
          8 (3822) 414-425
        </a>
      </div>
    </div>
  );
};

export default Menu;
