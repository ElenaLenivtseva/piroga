import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";
import CategCard from "./CategCard";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  return (
    <div className="categories">
      {categories
        ? categories.map((item) => {
            return <CategCard item={item} key={item.type}/>
          })
        : null}
    </div>
  );
};

export default Categories;
