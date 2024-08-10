import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";

const SingleProduct = () => {
  const params = useParams();
  console.log(params.id)
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  let allCategory = products.filter((elem) => {
    return elem.type === params.type;
  });

  let singleProduct = allCategory[0].products.filter((elem)=>{
    return elem.id === params.id
  })
  
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  // получить все-все товары соответсвующей категории, затем по id конкретного продукта, получить все данные о нем - в объекте и отрисовать по нему
  return <div>SingleProduct</div>;
};

export default SingleProduct;
