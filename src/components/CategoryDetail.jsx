import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilteredProductsAsync, removeFilteredCategory } from "../features/productsSlice";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

const CategoryDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.filteredByCategory);
  
  useEffect(() => {
    dispatch(getFilteredProductsAsync(params.type));
    return () => {
      dispatch(removeFilteredCategory());
    };
  }, [dispatch, params.type]);

  return (
    <>
      {products.length>0 ? (
        <div>
          <h2>{products[0].categoryName}</h2>
          <div>
            {products.map((item) => {
              return <ProductCard product={item} id={item.id} />;
            })}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default CategoryDetail;
