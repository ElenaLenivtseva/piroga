import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersAsync,
  addOrderAsync,
  deleteOrderAsync,
} from "../features/ordersSlice";

const Admin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAsync());
  }, [dispatch]);

  const orders = useSelector((state) => state.orders.orders);
  // const id = nanoid();
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
            <div id={item.id}>
              <p>{item.title}</p>
              <p>{item.id}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Admin;
