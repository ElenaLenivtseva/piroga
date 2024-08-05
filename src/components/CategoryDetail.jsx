import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";
import { useParams } from "react-router-dom";

const CategoryDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  let res = products.filter((elem) => {
    return elem.type === params.type;
  });
//   console.log(res)
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  return (
    <div>
      <h2>{res[0]?res[0].title:''}</h2>
    </div>
  );
};

export default CategoryDetail;
