import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../../features/productsSlice";
import CategoryCard from "../CategCard/CategCard";
import "./Categories.scss";

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.products.categories);

  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  return (
    <div className="categories">
      <div className="container">
        <h2 className="categories__title">Меню</h2>
        <div className="categories__wrap">
          {categories
            ? categories.map((item) => {
                return <CategoryCard item={item} key={item.type} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default Categories;
