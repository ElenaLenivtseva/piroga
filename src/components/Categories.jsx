import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";

const Categories = () => {
  const dispatch = useDispatch();


  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);
  return (
    <div className="App">
      {products
        ? products.map((item) => {
            return(
                <div>
                    <img src={item.mainImage} alt={item.title}/>
                    <h4>{item.title}</h4><p>{item.products.length} блюда</p></div>
            )
             
          })
        : ""}
    </div>
  );
};

export default Categories;
