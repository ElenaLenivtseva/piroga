import React, { useState } from "react";
import AllOrders from "./AllOrders";
import Products from "./Products";

const Admin = () => {
  const [status, setStatus] = useState("orders");
  return (
    <div>
      <div>
        <p onClick={() => setStatus("orders")}>Заказы</p>
        <p onClick={() => setStatus("products")}>Товары</p>
      </div>
      <div>{status === "orders" ? <AllOrders /> : <Products />}</div>
    </div>
  );
};

export default Admin;
