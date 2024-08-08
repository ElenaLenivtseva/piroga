import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

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
    <>
    {res[0]?(<div>
      <h2>{res[0].title}</h2>
      <div>
        {res[0].products.map((item)=>{
          return (
            <ProductCard product={item} id={item.id}/>
          )
        })}
      </div>
      
      
    </div>):<div>Loading</div>}
    </>
    
  );
};

export default CategoryDetail;
