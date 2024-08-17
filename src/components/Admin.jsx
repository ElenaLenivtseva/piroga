import React, { useState } from "react";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import AdminCategories from "./AdminCategories";
import AdminSlider from "./AdminSlider";

const Admin = () => {
  const [status, setStatus] = useState("slider");
  return (
    <div>
      <div>
        <p onClick={() => setStatus("orders")}>Заказы</p>
        <p onClick={() => setStatus("products")}>Товары</p>
        <p onClick={() => setStatus("categories")}>Категории</p>
        <p onClick={() => setStatus("slider")}>Слайдер</p>
      </div>
      <div>{status === "orders" ? <AllOrders /> :null}</div>
      <div>{status === "products" ? <AllProducts /> :null}</div>
      <div>{status === "categories" ? <AdminCategories /> :null}</div>
      <div>{status === "slider" ? <AdminSlider /> :null}</div>
    </div>
  );
};

export default Admin;
