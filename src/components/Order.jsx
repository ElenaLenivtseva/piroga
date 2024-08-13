import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteOrderAsync } from '../features/ordersSlice';

const Order = ({order}) => {
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Заказ №{order.id}</h2>
      <p>Имя клиента {order.name}</p>
      <p>Доставка {order.delivery?'нужна':'не нужна. Самовывоз'}</p>
      <p>Адрес {order.address?order.address:' - '}</p>
      <p>Когда нужно: {order.time==='now'?'В ближайшее время': order.date}</p>
      <p>Способ оплаты {order.payment==='cash'?'наличные':'карта'}</p>
      <p>Нужна ли сдача: {order.change==='noChange'?'нет':'да'}</p>
      <p>Примечание {order.note}</p>
      <button onClick={()=>dispatch(deleteOrderAsync(order.id))}>Удалить заказ</button>
    </div>
  )
}

export default Order
