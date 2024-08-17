import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsAsync,
  addProductAsync,
} from "../features/productsSlice";
import {getCategoriesAsync} from '../features/categoriesSlice'
import ProductAdmin from "./ProductAdmin";

const initialProduct = {
  category: "",
  categoryName: "",
  title: "",
  img: "",
  composition: [],
  calories: 0,
  proteins: 0,
  fat: 0,
  carbo: 0,
  expiration: 0,
  description: "",
  price: 0,
  totalPrice: 0,
  weight: 0,
  amountInCart: 0,
};

function makeObjOfArrs(keys, values) {
  let obj = {};

  for (let i = 0; i <= 4; i++) {
    let key = keys[i];
    let value = values[i];

    obj[key] = value;
  }

  return obj;
}

const AllProducts = () => {
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [form, setForm] = useState(initialProduct);

  useEffect(() => {
    dispatch(getAllProductsAsync());
    dispatch(getCategoriesAsync());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products.allProducts);
  const categories = useSelector((state) => state.categories);

  function handleChangeComposition(str) {
    setForm({ ...form, composition: str.split(",") });
  }
  function handleAddProduct(e) {
    e.preventDefault();
    dispatch(addProductAsync(form));
    setForm(initialProduct);
    setAdd(false);
  }

  // Создание объекта из двух массивов(тип категории и название). Чтобы при выборе типа категории менялось и имя в объекте продукта
  let categoriesTypes = [];
  let categoriesNames = [];

  for (let i = 0; i < categories.length; i++) {
    categoriesTypes.push(categories[i].type);
    categoriesNames.push(categories[i].title);
  }
  const categoryDetailObj = makeObjOfArrs(categoriesTypes, categoriesNames);

  function handleSelectChange(e) {
    const categoryType = e.target.value;
    const categoryName = categoryDetailObj[categoryType];
    setForm({ ...form, category: categoryType, categoryName: categoryName });
  }

  return (
    <div>
      <button onClick={() => setAdd(true)}>Добавить новый товар</button>
      {add ? (
        <div>
          <p onClick={() => setAdd(false)}>X</p>
          <button onClick={() => setForm(initialProduct)}>
            Очистить форму
          </button>
          <form>
            <label>
              Категория
              <select onChange={handleSelectChange}>
                {categoriesTypes.map((item, index) => {
                  return (
                    <option value={item} key={index}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </label>
            <label>
              Название товара
              <input
                type="text"
                placeholder="Пирог с мясом"
                onChange={(e) => {
                  setForm({ ...form, title: e.target.value });
                }}
                value={form.title}
              />
            </label>
            <label>
              Ссылка на изображение
              <input
                type="text"
                placeholder="https:/image.png"
                onChange={(e) => {
                  setForm({ ...form, img: e.target.value });
                }}
                value={form.img}
              />
            </label>
            <label>
              Состав: перечисляйте продукты через запятую
              <input
                type="text"
                placeholder="Мука,сахар,соль"
                onChange={(e) => handleChangeComposition(e.target.value)}
                value={form.composition}
              />
            </label>
            <label>
              Калории на 100 г
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, calories: e.target.value });
                }}
                value={form.calories}
              />
            </label>
            <label>
              Белки на 100 г
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, proteins: e.target.value });
                }}
                value={form.proteins}
              />
            </label>
            <label>
              Жиры на 100 г
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, fat: e.target.value });
                }}
                value={form.fat}
              />
            </label>
            <label>
              Углеводы на 100 г
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, carbo: e.target.value });
                }}
                value={form.carbo}
              />
            </label>
            <label>Срок годности в часах</label>
            <input
              type="number"
              onChange={(e) => {
                setForm({ ...form, expiration: e.target.value });
              }}
              value={form.expiration}
            />
            <label>
              Описание товара
              <textarea
                placeholder="Описание товара"
                onChange={(e) => {
                  setForm({ ...form, description: e.target.value });
                }}
                value={form.description}
              ></textarea>
            </label>
            <label>
              Вес в кг
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, weight: e.target.value });
                }}
                value={form.weight}
              />
            </label>
            <label>
              Цена в рублях
              <input
                type="number"
                onChange={(e) => {
                  setForm({ ...form, price: e.target.value });
                }}
                value={form.price}
              />
            </label>

            <button onClick={handleAddProduct}>Добавить товар</button>
          </form>
        </div>
      ) : null}

      <div>
        {allProducts.length > 0 ? (
          allProducts.map((product) => {
            return <ProductAdmin product={product} />;
          })
        ) : (
          <p>Загрузка...</p>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
