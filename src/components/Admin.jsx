import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {getOrdersAsync, addOrderAsync} from "../features/adminSlice";

const Admin = () => {
    const dispatch = useDispatch()
    const admin = useSelector((state) => state.admin);
    console.log(admin.orders)
    useEffect(() => {
        dispatch(getOrdersAsync());
      }, [dispatch]);
  return (
    <div>
      <button onClick={()=>dispatch(addOrderAsync({test: 'test'}))}>Имитация добавления заказа</button>
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
