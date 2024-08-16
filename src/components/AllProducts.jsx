import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProductsAsync,
  addProductAsync,
} from "../features/productsSlice";
import ProductAdmin from "./ProductAdmin";
import { nanoid } from "nanoid";



const AllProducts = () => {
  const initialProduct = {
    id: nanoid(),
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
  const dispatch = useDispatch();
  const [add, setAdd] = useState(false);
  const [form, setForm] = useState(initialProduct);
  function handleChangeComposition(str) {
    setForm({ ...form, composition: str.split(",") });
  }
  useEffect(() => {
    dispatch(getAllProductsAsync());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products.allProducts);

  return (
    <div>
      <button onClick={() => setAdd(true)}>Добавить новый товар</button>
      {add ? (
        <div>
          <p onClick={() => setAdd(false)}>X</p>
          <form>
            <label>Категория EN<input
              type="text"
              placeholder="Pirogi"
              onChange={(e) => {
                setForm({ ...form, category: e.target.value });
              }}
              value={form.category}
            /></label>
            <label>
            Категория RU
            <input
              type="text"
              placeholder="Пироги"
              onChange={(e) => {
                setForm({ ...form, categoryName: e.target.value });
              }}
              value={form.categoryName}
            />
            </label>
            <label>Название товара<input
              type="text"
              placeholder="Пирог с мясом"
              onChange={(e) => {
                setForm({ ...form, title: e.target.value });
              }}
              value={form.title}
            /></label>
            <label>Ссылка на изображение<input
              type="text"
              placeholder="https:/image.png"
              onChange={(e) => {
                setForm({ ...form, img: e.target.value });
              }}
              value={form.img}
            /></label>
            <label>Состав: перечисляйте продукты через запятую<input
              type="text"
              placeholder="Мука,сахар,соль"
              onChange={(e) => handleChangeComposition(e.target.value)}
              value={form.composition}
            /></label>
            <label>Калории на 100 г<input
              type="number"
              onChange={(e) => {
                setForm({ ...form, calories: e.target.value });
              }}
              value={form.calories}
            /></label>
            <label>Белки на 100 г<input
              type="number"
             
              onChange={(e) => {
                setForm({ ...form, proteins: e.target.value });
              }}
              value={form.proteins}
            /></label>
            <label>Жиры на 100 г<input
              type="number"
            
              onChange={(e) => {
                setForm({ ...form, fat: e.target.value });
              }}
              value={form.fat}
            /></label>
            <label>Углеводы на 100 г<input
              type="number"
              
              onChange={(e) => {
                setForm({ ...form, carbo: e.target.value });
              }}
              value={form.carbo}
            /></label>
            <label>Срок годности в часах</label>
            <input
              type="number"
            
              onChange={(e) => {
                setForm({ ...form, expiration: e.target.value });
              }}
              value={form.expiration}
            />
            <label>Описание товара
            <textarea
              placeholder="Описание товара"
              onChange={(e) => {
                setForm({ ...form, description: e.target.value });
              }}
              value={form.description}
            ></textarea>
            </label>
            <label>Вес в кг<input
              type="number"
              
              onChange={(e) => {
                setForm({ ...form, weight: e.target.value });
              }}
              value={form.weight}
            /></label>
            <label>Цена в рублях<input
              type="number"
              onChange={(e) => {
                setForm({ ...form, price: e.target.value });
              }}
              value={form.price}
            /></label>
            
            <button
              onClick={(e) => {
                e.preventDefault();
                setForm(form);
                dispatch(addProductAsync(form));
                setForm(initialProduct);
                setAdd(false);
              }}
            >
              Добавить товар
            </button>
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
