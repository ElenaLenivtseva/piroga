В процессе.

Пет-проект - сайт по заказу выпечки. Планируемый стек: React, Redux, SASS, JSON Server. Использование методологии БЭМ. Изначально использовался mockaApi.io, чтобы можно было залить сайт на netify. Но у сервиса есть ограничения, которые никак не снять, поэтому было решено перейти на локальный сервер. Поэтому для просмотра проекта репозиторий необходимо клонировать, установить зависимости и запустить команду npm run dev. 

В данный момент сайт без стилизации (работаю над логикой в Redux).

ВЫПОЛНЕННЫЕ ЗАДАЧИ:
- подгрузка всех категорий товаров
- подгрузка деталей выбранной категории
- подгрузка отдельного товара
- роутинг
- управление корзиной (добавление товара в корзину, регуляция количества товара, удаление из корзины)
- управление заказами (добавление - пользователем при отправке формы, удаление - при просмотре заказов администратором)
- управление товарами (просмотр всех товаров - администратором, удаление определенного товара, редактирование и добавление)
- управление категориями товаров (добавление категории, удаление товаров конкретной категории)

  

ЗАДАЧИ, КОТОРЫЕ ОСТАЛОСЬ ВЫПОЛНИТЬ:
- аутенфикация администратора
- валидация формы заказа, добавления/редактирования товара, добавление категории
- переорганизация папки components
- стилизация компонентов (через SASS)
- рефакторинг (например, нужно вытаскивать части стейта еще в слайсах, а затем экспортировать. И т.д.)


