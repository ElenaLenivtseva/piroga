import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAsync,
  removeSelectedProduct,
} from "../features/productsSlice";
import { addToCart, removeFromCart } from "../features/cartSlice";

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) => state.products.selectedProduct);
  const cart = useSelector((state) => state.cart);
  const exist = cart.cart.find((product) => product.id === params.id);

  useEffect(() => {
    dispatch(getProductAsync(params.id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, params.id]);

  return (
    <>
      {product ? (
        <div className="single-product">
          <div>
            <img src={product.img} alt={product.title} />
          </div>
          <div>
            <p>{product.categoryName}</p>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <div>
              Состав:
              {Array.isArray(product.composition) ? (
                product.composition.map((item, index) => {
                  return <p key={index}>{item}</p>;
                })
              ) : (
                <p>Загрузка</p>
              )}
            </div>
            <div>
              <p>Белки: {product.proteins}</p>
              <p>Жиры: {product.fat}</p>
              <p>Углеводы: {product.carbo}</p>
            </div>
            <p>Углеводы: {product.calories}</p>
            <p>{`Цена: ${product.price}`}</p>
            <p>{`Вес: ${product.weight}`}</p>
            {exist ? (
              <div>
                <button onClick={() => dispatch(removeFromCart(product))}>
                  -
                </button>
                <p>{exist.amountInCart}</p>
                <button onClick={() => dispatch(addToCart(product))}>+</button>
              </div>
            ) : (
              <button onClick={() => dispatch(addToCart(product))}>
                Добавить в корзину
              </button>
            )}
          </div>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </>
  );
};

export default SingleProduct;
