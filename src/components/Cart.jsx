import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, cleanCart } from "../features/cartSlice";

let initial = {
  delivery: false,
  change: 'noChange',
  time: 'now',
  date: "",
  phone: "",
  name: "",
  address: "",
  payment: "cash",
  note: "",
};
const Cart = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(
    initial
  );
  const cart = useSelector((state) => state.cart);
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
      {/* Done */}
      <div>
        <h3>Контакты</h3>
        <label>
          Номер телефона
          <input
            type="tel"
            name="tel"
            id=""
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </label>
        <label>
          Имя
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>
      </div>
      {/* Done */}
      <div>
        <h3>Способ получения</h3>
        <div>
          <div onClick={() => setForm({ ...form, delivery: true })}>
            Доставка курьером
          </div>
          <div onClick={() => setForm({ ...form, delivery: false })}>
            Самовывоз
          </div>
        </div>
        <div>
          {form.delivery ? (
            <div>
              Адрес доставки
              <input
                type="text"
                onChange={(e) => setForm({ ...form, address: e.target.value })}
              />
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
            value='now'
            checked={form.time==='now'?true:false}
            onChange={() => setForm({...form, time: true})}
          />
        </label>
        <label>
          К определенному времени
          <input
            type="radio"
            name="time"
            id=""
            value='later'
            checked={form.time==='later'?true:false}
            onChange={(e) => setForm({...form, time: e.target.value})}
          />
        </label>
        {form.time === 'later'? (
          <div>
            Выберете дату <input type="date" value={form.date} onChange={(e)=>setForm({...form,date:e.target.value})}/>
          </div>
        ) : null}
      </div>
      <div>
        <h3>Оплата</h3>
        <div>
          <div onClick={()=>setForm({...form, payment: 'cash'})}>
            Наличными при получении
            {form.delivery &&form.payment==='cash' ? (
              <div>
                Надо ли курьеру иметь с собой сдачу?
                <label>
                  Да
                  <input
                    type="radio"
                    name="change"
                    id=""
                    value='needChange'
                    checked={form.change==='needChange'?true:false}
                    onChange={(e) => setForm({...form, change: e.target.value})}
                  />
                </label>
                <label>
                  Нет
                  <input
                    type="radio"
                    name="change"
                    id=""
                    value='noChange'
                    checked={form.change==='noChange'?true:false}
                    onChange={(e) => setForm({...form, change: e.target.value})}
                  />
                </label>
              </div>
            ) : null}
          </div>
          <div onClick={()=>setForm({...form, payment: 'card'})}>Картой при получении</div>
        </div>
      </div>
      <div>
        <h3>Примечания к заказу</h3>
        <textarea
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
        ></textarea>
      </div>
      {/* НАДО ЕЩЕ ВАЛИДАЦИЮ ДЕЛАТЬ! */}
      <button onClick={()=>console.log(form)}>Итого</button>
    </div>
  );
};

export default Cart;
