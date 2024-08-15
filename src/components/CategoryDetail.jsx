import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProductsAsync } from "../features/productsSlice";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const CategoryDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  console.log(params);

  const products = useSelector((state) => state.products.filteredByCategory);

  useEffect(() => {
    dispatch(getFilteredProductsAsync(params.type));
  }, [dispatch]);

  return (
    <>
      <div>
        <h2>{products[0].categoryName}</h2>
        <div>
          {products.map((item) => {
            return <ProductCard product={item} id={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
