import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, cleanCart } from "../features/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [delivery, setDelivery] = useState(false);
  const [change, setChange] = useState(true);
  const [time, setTime] = useState(true);
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
      {cart.totalPrice < 600 ? (
        <p>
          Минимальная стоимость заказа 600 р.Добавьте еще товаров на сумму{" "}
          {600 - cart.totalPrice}руб
        </p>
      ) : null}
      <p>Всего товаров: {cart.totalAmount}</p>
      <div>
        <h3>Контакты</h3>
        <label>
          Номер телефона
          <input type="tel" name="tel" id="" />
        </label>
        <label>
          Имя
          <input type="text" />
        </label>
      </div>
      <div>
        <h3>Способ получения</h3>
        <div>
          <div onClick={() => setDelivery(true)}>Доставка курьером</div>
          <div onClick={() => setDelivery(false)}>Самовывоз</div>
        </div>
        <div>
          {delivery ? (
            <div>
              Адрес доставки
              <input type="text" />
            </div>
          ) : (
            <p>Наш адрес: пр.Фрунзе 31</p>
          )}
        </div>
      </div>
      <div>
        <h3>Время доставки</h3>
        <label>
          В ближайшее время
          <input
            type="radio"
            name="time"
            id=""
            value={time}
            onChange={() => setTime(true)}
          />
        </label>
        <label>
          Нет
          <input
            type="radio"
            name="time"
            id=""
            value={time}
            onChange={() => setTime(false)}
          />
        </label>
        {time?<div>Выберете дату <input type="date"/></div>:null}
      </div>
      <div>
        <h3>Оплата</h3>
        <div>
          <div>
            Наличными при получении
            {delivery ? (
              <div>
                Надо ли курьеру иметь с собой сдачу?
                <label>
                  Да
                  <input
                    type="radio"
                    name="change"
                    id=""
                    value={change}
                    onChange={() => setChange(true)}
                  />
                </label>
                <label>
                  Нет
                  <input
                    type="radio"
                    name="change"
                    id=""
                    value={change}
                    onChange={() => setChange(false)}
                  />
                </label>
              </div>
            ) : null}
          </div>
          <div>Картой при получении</div>
        </div>
      </div>
      <div>
        <h3>Примечания к заказу</h3>
        <textarea></textarea>
      </div>
    </div>
  );
};

export default Cart;
