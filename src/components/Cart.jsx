import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, cleanCart } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  return (
    <div>
      <div>
        <h2>Состав заказа</h2>
        <div>
          {cart.cart.length > 0 ? (
            <>
              {cart.cart.map((item) => {
                return (
                  <div key={item.id}>
                    <p>{item.title}</p> <p>Цена:{item.price}</p>
                    <p>Количество:{item.amountInCart}</p>
                    <p>Итого:{item.totalPrice}</p>
                    <div>
                      <button onClick={() => dispatch(removeFromCart(item))}>
                        -
                      </button>
                      <p>{item.amountInCart}</p>
                      <button onClick={() => dispatch(addToCart(item))}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}

              <button onClick={() => dispatch(cleanCart())}>
                Очистить корзину
              </button>
            </>
          ) : (
            "Корзина пуста, добавьте товары"
          )}
        </div>
      </div>
      <p>Общая стоимость: {cart.totalPrice}</p>
      <p>Всего товаров: {cart.totalAmount}</p>
    </div>
  );
};

export default Cart;
