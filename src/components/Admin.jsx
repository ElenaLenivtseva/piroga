import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersAsync,
  addOrderAsync,
  deleteOrderAsync,
} from "../features/ordersSlice";
import Order from "./Order";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAsync());
  }, [dispatch]);

  const orders = useSelector((state) => state.orders.orders);

  return (
    <div>
      <button
        onClick={() =>
          dispatch(addOrderAsync({ title: "test2", id: "123" }))
        }
      >
        Имитация добавления заказа
      </button>
      <button onClick={() => dispatch(deleteOrderAsync("123"))}>
        Удалить заказ
      </button>
      <div>
        {orders.map((item) => {
          return (
            <Order order={item}/>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
