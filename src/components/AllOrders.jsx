import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getOrdersAsync
} from "../features/ordersSlice";
import Order from "./Order";

const AllOrders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersAsync());
  }, [dispatch]);

  const orders = useSelector((state) => state.orders);

  return (
    <div>
      <div>
        {orders?orders.map((item) => {
          return (
            <Order order={item}/>
          );
        }):null}
      </div>
    </div>
  );
};

export default AllOrders;
