import React from "react";
import './Delivery.scss'

const ConditionsOfDelivery = () => {
  return (
    <div className="container">
      <div className="delivery">
        <h2 className="delivery__title">Условия доставки</h2>
        <p className="delivery__text">
          Мы принимаем заказы с 9:00 до 20:00, доставка осуществляется с 10:00
          до 19:00.
        </p>
        <p className="delivery__text">
          Забрать свой заказ в Столе Заказов можно самовывозом в согласованное
          при заказе время по адресу: Нахимова 15, Пекарня Пирога.
        </p>
        <p className="delivery__text">
          Предоплата при заказе свыше 5000 руб. составляет 50%{" "}
        </p>
        <p className="delivery__text">
          Минимальная сумма заказа при доставке и самовывозе от 600 рублей.{" "}
        </p>
        <p className="delivery__text">
          Вы можете оформить заказ по телефону 41-44-25, либо на нашем сайте,
          воспользовавшись формой онлайн заказа, после чего оператор службы
          доставки свяжется с Вами для подтверждения заказа.
        </p>
        <p className="delivery__text">
          Если Вам не перезвонили в течение 30 минут, пожалуйста, свяжитесь с
          нами, возможно произошел сбой в программе.
        </p>
        <p className="delivery__text">
          Каждый пирог выполняется индивидуально под Ваш заказ, ввиду чего
          минимальное время доставки пирогов – 3 часа после заказа. Конкретное
          время готовности Вашего заказа Вы можете уточнить у оператора.
        </p>
        <p className="delivery__text">
          Наши пироги изготавливаются вручную и весят примерно 1 кг, при этом
          вес каждого конкретного пирога может отличаться на +/- 50-100 г. А
          некоторые виды Сицилийских пирогов могут отличаться на +/- 100-200 г.
          В каталоге указана цена за 1 кг. В любом случае стоимость Вашего
          заказа будет рассчитана, исходя из фактического веса каждого пирога.
        </p>
        <p className="delivery__text">
          Заказы, оформленные после 16:00, принимаются с доставкой или
          самовывозом на следующий день не ранее 11:00 по готовности пирогов.
        </p>
        <p className="delivery__text">
          Заказ в категориях «Торты», «Пирожные», «Блины сладкие», «Блины
          сытные» принимается не менее, чем за сутки до даты доставки или
          самовывоза.
        </p>
      </div>
    </div>
  );
};

export default ConditionsOfDelivery;
