import React, { useState } from "react";
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";

const Admin = () => {
  const [status, setStatus] = useState("orders");
  return (
    <div>
      <div>
        <p onClick={() => setStatus("orders")}>Заказы</p>
        <p onClick={() => setStatus("products")}>Товары</p>
      </div>
      <div>{status === "orders" ? <AllOrders /> : <AllProducts />}</div>
    </div>
  );
};

export default Admin;
