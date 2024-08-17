import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart } from "../features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  let exist = cart.cart.find((item) => item.id === product.id);
  return (
    <div className='productCard'>
    <Link to={`/${product.id}`}>
      <img src={product.img} alt={product.title}/>
      <div>
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>{`${product.price} руб`}</p>
      <p>{`${product.weight} кг`}</p>
      </div>
      </Link>
      {exist ? (
          <div>
            <button onClick={() => dispatch(removeFromCart(product))}>-</button>
            <p>{exist.amountInCart}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              +
            </button>
          </div>
        ) : (
          <button onClick={() => dispatch(addToCart(product))}>
            Добавить в корзину
          </button>
        )}
    </div>
  )
}

export default ProductCard
