import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductAsync,
  removeSelectedProduct,
} from "../../features/productsSlice";
import { addToCart, removeFromCart } from "../../features/cartSlice";
import "./SingleProduct.scss";

function convertCompositionToString(compositionArr) {
  if (compositionArr.length === 0) return "";
  return (
    compositionArr.slice(0, -1).join(", ") +
    (compositionArr.length > 1 ? ", " : "") +
    compositionArr.slice(-1) +
    ". "
  );
}

const SingleProduct = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => state.products.selectedProduct);
  const cart = useSelector((state) => state.cart);
  const exist = cart.cart.find((product) => product.id === params.id);

  useEffect(() => {
    dispatch(getProductAsync(params.id));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [dispatch, params.id]);
  let compositionStr = "";
  if (Array.isArray(product.composition)) {
    compositionStr = convertCompositionToString(product.composition);
  }

  return (
    <>
      {product ? (
        <div className="container">
          <div className="single-product">
            <div className="single-product__img-wrap">
              <img
                className="single-product__img"
                src={product.img}
                alt={product.title}
              />
            </div>
            <div className="single-product__info">
              <div className="single-product__category">
                <div
                  className="single-product__back"
                  onClick={() => navigate(-1)}
                >
                  <div className="single-product__back-wrap">ᐸ</div>
                </div>
                <p className="single-product__category-text">
                  {product.categoryName}
                </p>
              </div>

              <h2 className="single-product__title">{product.title}</h2>
              <div className="single-product__info-item">
                <p className="single-product__text">{product.description}</p>
              </div>
              <div className="single-product__info-item">
                <p className="single-product__text">
                  {`Состав: ${compositionStr}`}
                </p>
              </div>

              <div className="single-product__info-item">
                <div className="single-product__info-params">
                  <div className="single-product__text_sm single-product__key">На 100 г</div>
                  <div className="single-product__text_sm single-product__key">Белки</div>
                  <div className="single-product__text_sm single-product__key">Жиры</div>
                  <div className="single-product__text_sm single-product__key">Углеводы</div>
                </div>
                <div className="single-product__info-params">
                  <div className="single-product__text_sm">
                    {`${product.calories} ккал`}
                  </div>
                  <div className="single-product__text_sm">{product.proteins}</div>
                  <div className="single-product__text_sm">{product.fat}</div>
                  <div className="single-product__text_sm">{product.carbo}</div>
                </div>
              </div>
              <div className="single-product__info-item">
                <p className="single-product__text single-product__price">{`${product.price} р`}</p>
                <p className="single-product__text_sm single-product__weight">
                  {`${product.weight} кг`}
                </p>
              </div>
              
              {exist ? (
                <div>
                  <button onClick={() => dispatch(removeFromCart(product))}>
                    -
                  </button>
                  <p>{exist.amountInCart}</p>
                  <button onClick={() => dispatch(addToCart(product))}>
                    +
                  </button>
                </div>
              ) : (
                <button className="single-product__button" onClick={() => dispatch(addToCart(product))}>
                  Добавить в корзину
                </button>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Загрузка...</p>
      )}
    </>
  );
};

export default SingleProduct;
