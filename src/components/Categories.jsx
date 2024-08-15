import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";
import CategCard from "./CategCard";

const Categories = () => {
  const dispatch = useDispatch();


  // const products = useSelector((state) => state.products);
  // console.log(products)
  // useEffect(() => {
  //   dispatch(getCategoriesAsync());
  // }, [dispatch]);
  return (
    <div className="categories">
      {/* {products
        ? products.map((item) => {
            return <CategCard item={item} key={item.type}/>
             
          })
        : ""} */}
    </div>
  );
};

export default Categories;
