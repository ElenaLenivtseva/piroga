import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategoriesAsync } from "../features/productsSlice";

const SingleProduct = () => {
  const params = useParams();
  console.log(params.id);
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  let allCategory = products.filter((elem) => {
    return elem.type === params.type;
  });

  let singleProduct = allCategory[0].products.filter((elem) => {
    return elem.id === params.id;
  });
  console.log(singleProduct);
  useEffect(() => {
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  // получить все-все товары соответсвующей категории, затем по id конкретного продукта, получить все данные о нем - в объекте и отрисовать по нему
  return (
    <div>
      <div>
        <img src={singleProduct[0].img} alt={singleProduct[0].title}/>
      </div>
      <div>
        <p>{singleProduct[0].categoryName}</p>
        <h2>{singleProduct[0].title}</h2>
        <p>{singleProduct[0].description}</p>
        <div>
          Состав:{" "}
          {singleProduct[0].composition.map((item, id) => {
            return <p>{item}</p>;
          })}
        </div>
        <div>
          <p>Белки: {singleProduct[0].proteins}</p>
          <p>Жиры: {singleProduct[0].fat}</p>
          <p>Углеводы: {singleProduct[0].carbo}</p>
        </div>
        <p>Углеводы: {singleProduct[0].calories}</p>
        <p>Углеводы: {singleProduct[0].price}</p>
        <p>Углеводы: {singleProduct[0].weight}</p>
        {singleProduct[0].amountInCart === '0' ? (
          <button>Добавить в корзину</button>
        ) : (
          <p>В корзине : {singleProduct[0].amountInCart}</p>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
