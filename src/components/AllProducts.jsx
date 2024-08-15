import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsAsync } from "../features/productsSlice";

import ProductAdmin from "./ProductAdmin";
const AllProducts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products.allProducts);
  console.log(allProducts);
  return (
    <div>
      <div>
        {allProducts.length > 0 ? (
          allProducts.map((product) => {
            return <ProductAdmin product={product} />;
          })
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
