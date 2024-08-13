import React,{useEffect} from 'react'
import { nanoid } from 'nanoid'
import { useDispatch, useSelector } from "react-redux";
import {getOrdersAsync, addOrderAsync, deleteOrderAsync} from "../features/adminSlice";

const Admin = () => {
    const dispatch = useDispatch()
    const admin = useSelector((state) => state.admin);
    console.log(admin)
    useEffect(() => {
        dispatch(getOrdersAsync());
      }, [dispatch]);
  return (
    <div>
      <button onClick={()=>dispatch(addOrderAsync({test2: 'test2', id: nanoid()}))}>Имитация добавления заказа</button>
      <button onClick={()=>dispatch(deleteOrderAsync("123"))}>Удалить заказ</button>
    <div>
        {/* {orders.map((item,idx)=>{
            return (<p>
                {item.test}
            </p>)
        })} */}
    </div>
    </div>
  )
}

export default Admin
