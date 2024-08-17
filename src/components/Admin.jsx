import React, { useState } from "react";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import AdminCategories from "./AdminCategories";

const Admin = () => {
  const [status, setStatus] = useState("orders");
  return (
    <div>
      <div>
        <p onClick={() => setStatus("orders")}>Заказы</p>
        <p onClick={() => setStatus("products")}>Товары</p>
        <p onClick={() => setStatus("categories")}>Категории</p>
      </div>
      <div>{status === "orders" ? <AllOrders /> :null}</div>
      <div>{status === "products" ? <AllProducts /> :null}</div>
      <div>{status === "categories" ? <AdminCategories /> :null}</div>
    </div>
  );
};

export default Admin;
